"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'v-',
  repeatForMediaQueries: true,
  map: [['base', 'baseline'], ['mid', 'middle'], ['top', 'top'], ['btm', 'bottom']],
  ruleTemplate: 'vertical-align: $mapValue;'
};
exports.default = _default;