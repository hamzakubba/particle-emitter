"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'content-',
  repeatForMediaQueries: true,
  map: [['start', 'flex-start'], ['end', 'flex-end'], ['center', 'center'], ['between', 'space-between'], ['around', 'space-around'], ['stretch', 'stretch']],
  ruleTemplate: 'align-content: $mapValue;'
};
exports.default = _default;