"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  repeatForMediaQueries: true,
  repeatFor: ['spacingNegativeDirections', 'spacingNegativeSizes'],
  map: [['n', 'margin']],
  selectorTemplate: '.$mapKey$spacingNegativeDirectionsKey$spacingNegativeSizesKey$mediaQuery',
  ruleTemplate: '$spacingNegativeDirectionsValue;'
};
exports.default = _default;