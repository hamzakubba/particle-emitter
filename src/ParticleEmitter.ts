export type KeyValuePairsInput = (string | [string | string[], any])[];
export type ListConfigInput = [string, KeyValuePairsInput];
export type MediaQueryConfig = [string, [string | null, string | null]];

interface RuleDescription<MapType> {
  map?: MapType;
  mapWithDefaultTemplates?: MapType,
  repeatFor?: string[];
  repeatForMediaQueries?: boolean;
  selectorTemplate?: string;
  ruleTemplate?: string;
  prefix?: string,
  suffix?: string,
  staticRules?: string,
  docsTitle?: string,
  docsBody?: string,
}

export type RuleConfigInput = [string, RuleDescription<KeyValuePairsInput>];

export interface ParticleEmitterConfig {
  defaultRuleTemplate?: string;
  defaultSelectorTemplate?: string;
  lists?: ListConfigInput[];
  mediaQueries?: MediaQueryConfig[];
  rules: RuleConfigInput[];
}

type KeyValuePairs = Map<string, string>;

interface LoopInfo {
  map: KeyValuePairs;
  depth: number;
  keyName: string;
  valueName: string;
}

const assert = (condition: any, error: string) => {
  if (!condition) {
    throw new Error(error);
  }
};

const getMap = (array: KeyValuePairsInput = []): Map<string, any> => new Map(
  array
    .map(
      elem =>
        typeof elem === 'string'
          ? [ elem, elem ]
          : (
            elem === null
              ? [ '', null ]
              : elem
          )
    )
    .map(
      ([ key, val ]) =>
        Array.isArray(key)
          ? key.map(innerKey => [ innerKey, val ])
          : [[ key, val ]]
    )
    .reduce(
      (accumulator, currentValue) => {
        currentValue.forEach(innerArray => accumulator.push(innerArray));
        return accumulator;
      },
      []
    ) as [string, any][]
);

const getPlainObject = (objOrPrimitive: any): any => {
  if (typeof objOrPrimitive === 'object') {
    if (objOrPrimitive instanceof Map) {
      return Array
        .from(objOrPrimitive)
        .map(([key, value]) => [key, getPlainObject(value)]);
    }

    if (Array.isArray(objOrPrimitive)) {
      return objOrPrimitive.map(element => getPlainObject(element));
    }

    if (!objOrPrimitive) {
      return null;
    }

    const result = {} as any;
    for (let key in objOrPrimitive) {
      result[key] = getPlainObject(objOrPrimitive[key]);
    }
    return result;
  }

  // primitive
  return objOrPrimitive;
};

export default class ParticleEmitter {
  private defaultRuleTemplate: string;
  private defaultSelectorTemplate: string;
  private lists: Map<string, KeyValuePairs>;
  private mediaQueries: Map<string, MediaQueryConfig>;
  private rules: Map<string, RuleDescription<KeyValuePairs>>;

  constructor(config: ParticleEmitterConfig) {
    const {
      rules,
      mediaQueries = [],
      lists = [],
      defaultSelectorTemplate = '.$prefix$mapKey$suffix$mediaQuery',
      defaultRuleTemplate = '$mapValue;',
    } = JSON.parse(JSON.stringify(config)) as ParticleEmitterConfig;

    const configWithDefaults = {
      rules,
      mediaQueries,
      lists,
      defaultSelectorTemplate,
      defaultRuleTemplate,
    } as ParticleEmitterConfig;

    ParticleEmitter.validate(configWithDefaults);

    const tempRules = getMap(rules);
    tempRules.forEach(
      (rule) => {
        if (rule.map) {
          rule.map = getMap(rule.map);
        }
        if (rule.mapWithDefaultTemplates) {
          rule.mapWithDefaultTemplates = getMap(rule.mapWithDefaultTemplates);
        }
      }
    );
    this.rules = tempRules;
    this.mediaQueries = getMap(mediaQueries);
    const tempLists = getMap(lists);
    tempLists.forEach((val, key) => {
      tempLists.set(key, getMap(val));
    });
    this.lists = tempLists;
    this.defaultSelectorTemplate = defaultSelectorTemplate;
    this.defaultRuleTemplate = defaultRuleTemplate;
  }

  private static validate({ rules /*, mediaQueries, lists, defaultSelectorTemplate, defaultRuleTemplate*/ }: ParticleEmitterConfig) {
    assert(rules && rules.length, 'No rules found');
    // todo: validate other things
  }

  getJson(): ParticleEmitterConfig {
    return getPlainObject(this);
  }

  getCss(): string {
    let css = '';

    // media-query-INdependent rules:
    Array.from(this.rules).forEach(([key], index) => {
      css += this.getRuleCss({ key, /* mediaQuery: undefined, indent: undefined */ });

      if (index < this.rules.size - 1) { // new line between rules only
        css += '\n';
      }
    });

    const mediaQueryDependentRules = Array
      .from(this.rules)
      .filter(([key, value]) => value.repeatForMediaQueries);

    // media-query-dependent rules:
    if (this.mediaQueries.size && mediaQueryDependentRules.length) {
      let indent: string;
      this.mediaQueries.forEach((mediaQueryMinMax, mediaQuery) => {
        css += '\n';

        if (!mediaQuery) {
          mediaQuery = '';
          indent = '';
        } else {
          css += '@media screen';
          if (mediaQueryMinMax[0]) {
            css += ` and (min-width: ${ mediaQueryMinMax[0] })`;
          }
          if (mediaQueryMinMax[1]) {
            css += ` and (max-width: ${ mediaQueryMinMax[1] })`;
          }
          css += ' {\n';
          indent = '  ';
        }

        mediaQueryDependentRules.forEach(([key, ruleDescription], index) => {
          css += this.getRuleCss({ indent, mediaQuery, key });

          if (index < mediaQueryDependentRules.length - 1) { // new line between rules only
            css += '\n';
          }
        });

        if (mediaQuery) {
          css += '}\n';
        }
      });
    }

    return css;
  }

  getRuleDescription(key: string): RuleDescription<KeyValuePairs> {
    const ruleDescription = this.rules.get(key);

    if (!ruleDescription) {
      throw new Error(`Cannot find rule with the key "${key}"`);
    }

    return ruleDescription;
  }

  getRuleCss({
    indent = '',
    mediaQuery = '',
    key,
  }: {
    indent?: string;
    mediaQuery?: string;
    key: string;
  }): string {
    let ruleCss = '';

    const ruleDescription = this.getRuleDescription(key);

    // ruleCss += `${indent}/***** ${key} *****/\n`;
    const {
      prefix = '',
      suffix = '',
      map,
      selectorTemplate = this.defaultSelectorTemplate,
      ruleTemplate = this.defaultRuleTemplate,
      staticRules = '',
      mapWithDefaultTemplates,
      repeatFor = [],
    } = ruleDescription;

    if (!mediaQuery && staticRules) {
      ruleCss += staticRules + '\n';
    }

    const repeatForMaps = new Map() as Map<string, KeyValuePairs>;

    if (map && map.size) {
      repeatForMaps.set('map', map);
    }

    repeatFor.forEach(listName => {
      const list = this.lists.get(listName);
      if (list) {
        repeatForMaps.set(listName, list);
      }
    });

    /*
      // //  in order to do the equivalent of this:

      if (repeatForMaps.size === 1) {
        repeatForMaps.forEach((loop0Map, loop0Name) => {
          const loop0KeyName = loop0Name + 'Key';
          const loop0ValueName = loop0Name + 'Value';

          loop0Map.forEach((value0, key0) => {
            ruleCss += `${indent}${selectorTemplate} { ${ruleTemplate}; }\n`
              .replace(new RegExp('\\$prefix', 'g'), prefix)
              .replace(new RegExp('\\$suffix', 'g'), suffix)
              .replace(new RegExp('\\$mediaQuery', 'g'), mediaQuery)
              .replace(new RegExp('\\$' + loop0KeyName, 'g'), key0)
              .replace(new RegExp('\\$' + loop0ValueName, 'g'), value0)
            ;
          });
        });
      }

      if (repeatForMaps.size === 2) {
        const entries = repeatForMaps.entries();

        const loop0 = entries.next().ruleDescription;
        const loop1 = entries.next().ruleDescription;

        const [ loop0Name, loop0Map ] = loop0;
        const loop0KeyName = loop0Name + 'Key';
        const loop0ValueName = loop0Name + 'Value';

        const [ loop1Name, loop1Map ] = loop1;
        const loop1KeyName = loop1Name + 'Key';
        const loop1ValueName = loop1Name + 'Value';

        loop0Map.forEach((value0, key0) => {
          loop1Map.forEach((value1, key1) => {
            ruleCss += `${indent}${selectorTemplate} { ${ruleTemplate}; }\n`
              .replace(new RegExp('\\$prefix', 'g'), prefix)
              .replace(new RegExp('\\$suffix', 'g'), suffix)
              .replace(new RegExp('\\$mediaQuery', 'g'), mediaQuery)
              // repeat x2:
              .replace(new RegExp('\\$' + loop0KeyName, 'g'), key0)
              .replace(new RegExp('\\$' + loop0ValueName, 'g'), value0)
              .replace(new RegExp('\\$' + loop1KeyName, 'g'), key1)
              .replace(new RegExp('\\$' + loop1ValueName, 'g'), value1)
            ;
          });
        });
      }

      if (repeatForMaps.size === 3) {
        const entries = repeatForMaps.entries();

        const loop0 = entries.next().ruleDescription;
        const loop1 = entries.next().ruleDescription;
        const loop2 = entries.next().ruleDescription;

        const [ loop0Name, loop0Map ] = loop0;
        const loop0KeyName = loop0Name + 'Key';
        const loop0ValueName = loop0Name + 'Value';

        const [ loop1Name, loop1Map ] = loop1;
        const loop1KeyName = loop1Name + 'Key';
        const loop1ValueName = loop1Name + 'Value';

        const [ loop2Name, loop2Map ] = loop2;
        const loop2KeyName = loop2Name + 'Key';
        const loop2ValueName = loop2Name + 'Value';

        loop0Map.forEach((value0, key0) => {
          loop1Map.forEach((value1, key1) => {
            loop2Map.forEach((value2, key2) => {
              ruleCss += `${indent}${selectorTemplate} { ${ruleTemplate}; }\n`
                .replace(new RegExp('\\$prefix', 'g'), prefix)
                .replace(new RegExp('\\$suffix', 'g'), suffix)
                .replace(new RegExp('\\$mediaQuery', 'g'), mediaQuery)
                // repeat x3:
                .replace(new RegExp('\\$' + loop0KeyName, 'g'), key0)
                .replace(new RegExp('\\$' + loop0ValueName, 'g'), value0)
                .replace(new RegExp('\\$' + loop1KeyName, 'g'), key1)
                .replace(new RegExp('\\$' + loop1ValueName, 'g'), value1)
                .replace(new RegExp('\\$' + loop2KeyName, 'g'), key2)
                .replace(new RegExp('\\$' + loop2ValueName, 'g'), value2)
              ;
            });
          });
        });
      }

      // //  we instead generalize to this:
    */
    if (repeatForMaps.size) {
      const loops: LoopInfo[] = [];
      let depth = 0;
      repeatForMaps.forEach((map, name) => {
        loops.push({
          map: map,
          depth: depth,
          keyName: name + 'Key',
          valueName: name + 'Value',
        });

        depth++;
      });

      if (loops.length > 1) {
}
      const looper = (loops: LoopInfo[] = [], depth = 0, maxDepth = loops.length, loopStack: [string, string][] = []) => {
        if (depth < maxDepth) {
          return loops[depth].map.forEach((value, key) => {
            loopStack.push([ key, value ]);
            looper(loops, depth + 1, maxDepth, loopStack);
            loopStack.pop();
          });
        } else {
          const replacements = [
            ['prefix', prefix],
            ['suffix', suffix],
            ['mediaQuery', mediaQuery],
          ];

          // repeat the replacements as many times as there are loops,
          // to safely resolve all references (e.g. second and third degree references)
          loopStack.forEach(() => {

            let outputDepth = 0;
            loopStack.forEach(([ key, value ]) => {
              replacements.push([loops[outputDepth].keyName, key + '']);
              replacements.push([loops[outputDepth].valueName, value]);

              outputDepth++;
            });

          });

          let loopCss = `${indent}${selectorTemplate} { ${ruleTemplate} }\n`;

          replacements.forEach(([ find, replaceWith ]) => {
            loopCss = loopCss.replace(new RegExp('\\$' + find, 'g'), replaceWith);
          });

          ruleCss += loopCss;
        }
      };

      looper(loops);
    }

    if (mapWithDefaultTemplates) {
      mapWithDefaultTemplates.forEach((value, key) => {
        ruleCss += `${indent}${this.defaultSelectorTemplate} { ${this.defaultRuleTemplate} }\n`
          .replace(/\$prefix/g, prefix)
          .replace(/\$suffix/g, suffix)
          .replace(/\$mapKey/g, key)
          .replace(/\$mapValue/g, value)
          .replace(/\$mediaQuery/g, mediaQuery)
        ;
      });
    }

    return ruleCss;
  }
}
