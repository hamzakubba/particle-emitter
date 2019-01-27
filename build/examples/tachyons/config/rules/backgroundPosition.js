"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'bg-',
  repeatForMediaQueries: true,
  map: [['center', 'center center'], ['top', 'top center'], ['right', 'center right'], ['bottom', 'bottom center'], ['left', 'center left']],
  ruleTemplate: 'background-repeat: no-repeat; background-position: $mapValue;'
};
exports.default = _default;