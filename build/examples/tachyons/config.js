"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mediaQueries = _interopRequireDefault(require("./config/mediaQueries"));

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
var _default = tachyonsConfig;
exports.default = _default;