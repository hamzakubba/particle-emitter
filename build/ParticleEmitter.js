"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assert = function assert(condition, error) {
  if (!condition) {
    throw new Error(error);
  }
};

var getMap = function getMap() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Map(array.map(function (elem) {
    return typeof elem === 'string' ? [elem, elem] : elem === null ? ['', null] : elem;
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return Array.isArray(key) ? key.map(function (innerKey) {
      return [innerKey, val];
    }) : [[key, val]];
  }).reduce(function (accumulator, currentValue) {
    currentValue.forEach(function (innerArray) {
      return accumulator.push(innerArray);
    });
    return accumulator;
  }, []));
};

var ParticleEmitter =
/*#__PURE__*/
function () {
  function ParticleEmitter(config) {
    _classCallCheck(this, ParticleEmitter);

    var _JSON$parse = JSON.parse(JSON.stringify(config)),
        rules = _JSON$parse.rules,
        _JSON$parse$mediaQuer = _JSON$parse.mediaQueries,
        mediaQueries = _JSON$parse$mediaQuer === void 0 ? [] : _JSON$parse$mediaQuer,
        _JSON$parse$lists = _JSON$parse.lists,
        lists = _JSON$parse$lists === void 0 ? [] : _JSON$parse$lists,
        _JSON$parse$defaultSe = _JSON$parse.defaultSelectorTemplate,
        defaultSelectorTemplate = _JSON$parse$defaultSe === void 0 ? '.$prefix$mapKey$suffix$mediaQuery' : _JSON$parse$defaultSe,
        _JSON$parse$defaultRu = _JSON$parse.defaultRuleTemplate,
        defaultRuleTemplate = _JSON$parse$defaultRu === void 0 ? '$mapValue;' : _JSON$parse$defaultRu;

    this.rules = rules;
    this.mediaQueries = mediaQueries;
    this.lists = lists;
    this.defaultSelectorTemplate = defaultSelectorTemplate;
    this.defaultRuleTemplate = defaultRuleTemplate;
    this.validate();
    this.init();
  }

  _createClass(ParticleEmitter, [{
    key: "validate",
    value: function validate() {
      assert(this.rules && this.rules.length, 'No rules found'); // todo
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.rules = getMap(this.rules);
      this.mediaQueries = getMap(this.mediaQueries);
      this.lists = getMap(this.lists);
      this.lists.forEach(function (val, key) {
        _this.lists.set(key, getMap(val));
      });
    }
  }, {
    key: "getJson",
    value: function getJson() {
      return {
        lists: Array.from(this.mediaQueries),
        mediaQueries: Array.from(this.mediaQueries),
        rules: Array.from(this.rules),
        defaultSelectorTemplate: this.defaultSelectorTemplate,
        defaultRuleTemplate: this.defaultRuleTemplate
      };
    }
  }, {
    key: "getCss",
    value: function getCss() {
      var _this2 = this;

      var css = '\n'; // media-query-INdependent rules:

      this.rules.forEach(function (value, key) {
        css += _this2.getRuleCss({
          key: key,
          value: value
          /* mediaQuery: undefined, indent: undefined */

        });
      });
      css += '\n'; // media-query-dependent rules:

      var indent;
      this.mediaQueries.forEach(function (mediaQueryMinMax, mediaQuery) {
        if (!mediaQuery) {
          mediaQuery = '';
          indent = '';
        } else {
          css += '@media screen';

          if (mediaQueryMinMax[0]) {
            css += " and (min-width: ".concat(mediaQueryMinMax[0], ")");
          }

          if (mediaQueryMinMax[1]) {
            css += " and (max-width: ".concat(mediaQueryMinMax[1], ")");
          }

          css += ' {\n';
          indent = '  ';
        }

        _this2.rules.forEach(function (value, key) {
          if (value.repeatForMediaQueries) {
            css += _this2.getRuleCss({
              indent: indent,
              mediaQuery: mediaQuery,
              key: key,
              value: value
            });
          }
        });

        if (mediaQuery) {
          css += '}';
        }

        css += '\n\n';
      });
      return css;
    }
  }, {
    key: "getRuleCss",
    value: function getRuleCss(_ref3) {
      var _this3 = this;

      var _ref3$indent = _ref3.indent,
          indent = _ref3$indent === void 0 ? '' : _ref3$indent,
          _ref3$mediaQuery = _ref3.mediaQuery,
          mediaQuery = _ref3$mediaQuery === void 0 ? '' : _ref3$mediaQuery,
          key = _ref3.key,
          value = _ref3.value;
      var ruleCss = ''; // ruleCss += `${indent}/***** ${key} *****/\n`;

      var _value$prefix = value.prefix,
          prefix = _value$prefix === void 0 ? '' : _value$prefix,
          _value$suffix = value.suffix,
          suffix = _value$suffix === void 0 ? '' : _value$suffix,
          map = value.map,
          _value$selectorTempla = value.selectorTemplate,
          selectorTemplate = _value$selectorTempla === void 0 ? this.defaultSelectorTemplate : _value$selectorTempla,
          _value$ruleTemplate = value.ruleTemplate,
          ruleTemplate = _value$ruleTemplate === void 0 ? this.defaultRuleTemplate : _value$ruleTemplate,
          _value$staticRules = value.staticRules,
          staticRules = _value$staticRules === void 0 ? '' : _value$staticRules,
          _value$mapWithDefault = value.mapWithDefaultTemplates,
          mapWithDefaultTemplates = _value$mapWithDefault === void 0 ? [] : _value$mapWithDefault,
          _value$repeatFor = value.repeatFor,
          repeatFor = _value$repeatFor === void 0 ? [] : _value$repeatFor;

      if (!mediaQuery && staticRules) {
        ruleCss += staticRules + '\n';
      }

      var repeatForMaps = new Map();

      if (map && map.length) {
        repeatForMaps.set('map', getMap(map));
      }

      repeatFor.forEach(function (listName) {
        return repeatForMaps.set(listName, _this3.lists.get(listName));
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
           const loop0 = entries.next().value;
          const loop1 = entries.next().value;
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
           const loop0 = entries.next().value;
          const loop1 = entries.next().value;
          const loop2 = entries.next().value;
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
        var loops = [];
        var depth = 0;
        repeatForMaps.forEach(function (map, name) {
          loops.push({
            map: map,
            depth: depth,
            keyName: name + 'Key',
            valueName: name + 'Value'
          });
          depth++;
        });

        var looper = function looper() {
          var loops = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : loops.length;
          var loopStack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

          if (depth < maxDepth) {
            return loops[depth].map.forEach(function (value, key) {
              loopStack.push([key, value]);
              looper(loops, depth + 1, maxDepth, loopStack);
              loopStack.pop();
            });
          } else {
            var replacements = [['prefix', prefix], ['suffix', suffix], ['mediaQuery', mediaQuery]]; // repeat the replacements as many times as there are loops,
            // to safely resolve all references (e.g. second and third degree references)

            loopStack.forEach(function () {
              var outputDepth = 0;
              loopStack.forEach(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    key = _ref5[0],
                    value = _ref5[1];

                replacements.push([loops[outputDepth].keyName, key]);
                replacements.push([loops[outputDepth].valueName, value]);
                outputDepth++;
              });
            });
            var loopCss = "".concat(indent).concat(selectorTemplate, " { ").concat(ruleTemplate, " }\n");
            replacements.forEach(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  find = _ref7[0],
                  replaceWith = _ref7[1];

              loopCss = loopCss.replace(new RegExp('\\$' + find, 'g'), replaceWith);
            });
            ruleCss += loopCss;
          }
        };

        looper(loops);
      }

      var mapWithDefaultTemplatesMap = getMap(mapWithDefaultTemplates);
      mapWithDefaultTemplatesMap.forEach(function (value, key) {
        ruleCss += "".concat(indent).concat(_this3.defaultSelectorTemplate, " { ").concat(_this3.defaultRuleTemplate, " }\n").replace(/\$prefix/g, prefix).replace(/\$suffix/g, suffix).replace(/\$mapKey/g, key).replace(/\$mapValue/g, value).replace(/\$mediaQuery/g, mediaQuery);
      });
      ruleCss += '\n';
      return ruleCss;
    }
  }]);

  return ParticleEmitter;
}();

exports.default = ParticleEmitter;
