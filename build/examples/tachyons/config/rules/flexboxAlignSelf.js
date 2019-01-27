"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'self-',
  repeatForMediaQueries: true,
  map: [['start', 'flex-start'], ['end', 'flex-end'], ['center', 'center'], ['baseline', 'baseline'], ['stretch', 'stretch']],
  ruleTemplate: 'align-self: $mapValue;'
};
exports.default = _default;