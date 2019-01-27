"use strict";

var _util = _interopRequireDefault(require("util"));

var _ParticleEmitter = _interopRequireDefault(require("../../src/ParticleEmitter"));

var _mediaQueries = _interopRequireDefault(require("./config/media-queries"));

var _lists = _interopRequireDefault(require("./config/lists"));

var _rules = _interopRequireDefault(require("./config/rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tachyonsConfig = {
  defaultSelectorTemplate: '.$prefix$mapKey$suffix$mediaQuery',
  defaultRuleTemplate: '$mapValue',
  mediaQueries: _mediaQueries.default,
  lists: _lists.default,
  rules: _rules.default
};
console.log('config', _util.default.inspect(tachyonsConfig, {
  showHidden: false,
  depth: null
}));
console.log('tachyons css', new _ParticleEmitter.default(tachyonsConfig).getCss() // matches output.css in this folder
);
