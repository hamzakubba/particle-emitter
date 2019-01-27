"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'items-',
  repeatForMediaQueries: true,
  map: [['start', 'flex-start'], ['end', 'flex-end'], ['center', 'center'], ['baseline', 'baseline'], ['stretch', 'stretch']],
  ruleTemplate: 'align-items: $mapValue;'
};
exports.default = _default;