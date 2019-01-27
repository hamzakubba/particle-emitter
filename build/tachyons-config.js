"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mediaQueries = _interopRequireDefault(require("./config/media-queries"));

var _lists = _interopRequireDefault(require("./config/lists"));

var _rules = _interopRequireDefault(require("./config/rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  defaultSelectorTemplate: '.$prefix$mapKey$suffix$mediaQuery',
  defaultRuleTemplate: '$mapValue',
  mediaQueries: _mediaQueries.default,
  lists: _lists.default,
  rules: _rules.default
};
exports.default = _default;
