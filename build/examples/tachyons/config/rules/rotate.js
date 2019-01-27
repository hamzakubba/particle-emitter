"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'rotate-',
  repeatForMediaQueries: true,
  map: ['45', '90', '135', '180', '225', '270', '315'],
  ruleTemplate: 'transform: rotate($mapValuedeg);'
};
exports.default = _default;