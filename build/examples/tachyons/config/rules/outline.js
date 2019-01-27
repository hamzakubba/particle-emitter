"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'outline',
  repeatForMediaQueries: true,
  map: [['', '1px solid'], ['-transparent', '1px solid transparent'], ['-0', '0']],
  ruleTemplate: 'outline: $mapValue;'
};
exports.default = _default;