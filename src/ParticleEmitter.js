const assert = (condition, error) => {
  if (!condition) {
    throw new Error(error);
  }
};

const getMap = (array = []) => new Map(
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
    )
);

export default class ParticleEmitter {
  constructor(config) {
    const {
      rules,
      mediaQueries = [],
      lists = [],
      defaultClassTemplate = '.$prefix$key$suffix$mediaQuery',
      defaultRuleTemplate = '$value',
    } = JSON.parse(JSON.stringify(config));

    this.rules = rules;
    this.mediaQueries = mediaQueries;
    this.lists = lists;
    this.defaultClassTemplate = defaultClassTemplate;
    this.defaultRuleTemplate = defaultRuleTemplate;

    this.validate();

    this.init();
  }

  validate() {
    assert(this.rules && this.rules.length, 'No rules found');
    // todo
  }

  init() {
    this.rules = getMap(this.rules);
    this.mediaQueries = getMap(this.mediaQueries);
    this.lists = getMap(this.lists);
    this.lists.forEach((val, key) => {
      this.lists.set(key, getMap(val));
    });
  }

  getCss() {
    let css = '\n';

    // non-media-dependent rules:
    this.rules
      .forEach((value, key) => {
        css += this.getRuleCss({ key, value });
      });

    css += '\n';

    // media-dependent rules:
    let indent;
    this.mediaQueries.forEach((mediaQueryMinMax, mediaQuery) => {
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

      this.rules
        .forEach((value, key) => {
          if (value.repeatForMediaQueries) {
            css += this.getRuleCss({ indent, mediaQuery, key, value });
          }
        });

      if (mediaQuery) {
        css += '}';
      }

      css += '\n\n';
    });

    return css;
  }

  getRuleCss({
    indent = '',
    mediaQuery = '',
    key,
    value,
  }) {
    let ruleCss = '';

    // ruleCss += `${indent}/***** ${key} *****/\n`;
    const {
      prefix = '',
      suffix = '',
      map,
      classTemplate = this.defaultClassTemplate,
      ruleTemplate = this.defaultRuleTemplate,
      staticRules = '',
      customRules = [],
      repeatFor = [],
    } = value;

    if (!mediaQuery && staticRules) {
      ruleCss += staticRules;
    }

    const repeatForMaps = new Map();

    if (map && map.length) {
      repeatForMaps.set('', getMap(map));
    }

    repeatFor.forEach(listName => repeatForMaps.set(listName, this.lists.get(listName)));

    /*
      // //  in order to do the equivalent of this:

      if (repeatForMaps.size === 1) {
        repeatForMaps.forEach((loop0Map, loop0Name) => {
          const loop0KeyName = loop0Name ? loop0Name + 'Key' : 'key';
          const loop0ValueName = loop0Name ? loop0Name + 'Value' : 'value';

          loop0Map.forEach((value0, key0) => {
            ruleCss += `${indent}${classTemplate} { ${ruleTemplate}; }\n`
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

        const loop0 = entries.next().value;
        const loop1 = entries.next().value;

        const [ loop0Name, loop0Map ] = loop0;
        const loop0KeyName = loop0Name ? loop0Name + 'Key' : 'key';
        const loop0ValueName = loop0Name ? loop0Name + 'Value' : 'value';

        const [ loop1Name, loop1Map ] = loop1;
        const loop1KeyName = loop1Name ? loop1Name + 'Key' : 'key';
        const loop1ValueName = loop1Name ? loop1Name + 'Value' : 'value';

        loop0Map.forEach((value0, key0) => {
          loop1Map.forEach((value1, key1) => {
            ruleCss += `${indent}${classTemplate} { ${ruleTemplate}; }\n`
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

        const loop0 = entries.next().value;
        const loop1 = entries.next().value;
        const loop2 = entries.next().value;

        const [ loop0Name, loop0Map ] = loop0;
        const loop0KeyName = loop0Name ? loop0Name + 'Key' : 'key';
        const loop0ValueName = loop0Name ? loop0Name + 'Value' : 'value';

        const [ loop1Name, loop1Map ] = loop1;
        const loop1KeyName = loop1Name ? loop1Name + 'Key' : 'key';
        const loop1ValueName = loop1Name ? loop1Name + 'Value' : 'value';

        const [ loop2Name, loop2Map ] = loop2;
        const loop2KeyName = loop2Name ? loop2Name + 'Key' : 'key';
        const loop2ValueName = loop2Name ? loop2Name + 'Value' : 'value';

        loop0Map.forEach((value0, key0) => {
          loop1Map.forEach((value1, key1) => {
            loop2Map.forEach((value2, key2) => {
              ruleCss += `${indent}${classTemplate} { ${ruleTemplate}; }\n`
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
      const loops = [];
      let depth = 0;
      repeatForMaps.forEach((map, name) => {
        loops.push({
          map: map,
          depth: depth,
          keyName: name ? name + 'Key' : 'key',
          valueName: name ? name + 'Value' : 'value',
        });

        depth++;
      });

      const looper = (loops = [], depth = 0, maxDepth = loops.length, loopStack = []) => {
        if (depth < maxDepth) {
          return loops[depth].map.forEach((value, key) => {
            loopStack.push([ key, value ]);
            looper(loops, depth + 1, maxDepth, loopStack);
            loopStack.pop();
          });
        } else {
          let css = `${indent}${classTemplate} { ${ruleTemplate}; }\n`
            .replace(new RegExp('\\$prefix', 'g'), prefix)
            .replace(new RegExp('\\$suffix', 'g'), suffix)
            .replace(new RegExp('\\$mediaQuery', 'g'), mediaQuery);

          // repeat the replacements as many times as there are loops,
          // to safely resolve all references (e.g. second and third degree references)
          loopStack.forEach(() => {

            let outputDepth = 0;
            loopStack.forEach(([ key, value ]) => {
              css = css
                .replace(new RegExp('\\$' + loops[outputDepth].keyName, 'g'), key)
                .replace(new RegExp('\\$' + loops[outputDepth].valueName, 'g'), value);

              outputDepth++;
            });

          });

          ruleCss += css;
        }
      };

      looper(loops);
    }

    const customRulesMap = getMap(customRules);
    customRulesMap.forEach((value, key) => {
      ruleCss += `${indent}${this.defaultClassTemplate} { ${this.defaultRuleTemplate} }\n`
        .replace('$prefix', prefix)
        .replace('$suffix', suffix)
        .replace('$key', key)
        .replace('$value', value)
        .replace('$mediaQuery', mediaQuery)
      ;
    });


    ruleCss += '\n';

    return ruleCss;
  }
}
