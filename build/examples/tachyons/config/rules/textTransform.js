"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'tt',
  repeatForMediaQueries: true,
  map: [['c', 'capitalize'], ['l', 'lowercase'], ['u', 'uppercase'], ['n', 'none']],
  ruleTemplate: 'text-transform: $mapValue;'
};
exports.default = _default;