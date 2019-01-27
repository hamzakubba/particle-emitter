"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'overflow',
  repeatFor: ['overflows'],
  repeatForMediaQueries: true,
  map: ['', '-x', '-y'],
  selectorTemplate: '.$prefix$mapKey-$overflowsKey$mediaQuery',
  ruleTemplate: 'overflow$mapKey: $overflowsKey;'
};
exports.default = _default;