"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  repeatForMediaQueries: true,
  repeatFor: ['spacingDirections', 'spacingSizes'],
  map: [['p', 'padding'], ['m', 'margin']],
  selectorTemplate: '.$mapKey$spacingDirectionsKey$spacingSizesKey$mediaQuery',
  ruleTemplate: '$spacingDirectionsValue;'
};
exports.default = _default;