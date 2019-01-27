"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'tracked',
  repeatForMediaQueries: true,
  map: [['', '.1em'], ['-tight', '-.05em'], ['-mega', '.25em']],
  ruleTemplate: 'letter-spacing: $mapValue;'
};
exports.default = _default;