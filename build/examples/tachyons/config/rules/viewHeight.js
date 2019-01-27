"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'vh',
  repeatForMediaQueries: true,
  map: [['-25', '25vh'], ['-50', '50vh'], ['-75', '75vh'], ['-100', '100vh']],
  ruleTemplate: 'height: $mapValue;'
};
exports.default = _default;