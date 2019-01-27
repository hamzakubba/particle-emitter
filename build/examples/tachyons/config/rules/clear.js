"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  staticRules: "\n.cf:before,\n.cf:after { content: \" \"; display: table; }\n.cf:after { clear: both; }\n.cf { *zoom: 1; }\n",
  prefix: 'c',
  repeatForMediaQueries: true,
  map: [['l', 'left'], ['r', 'right'], ['b', 'both'], ['n', 'none']],
  ruleTemplate: 'clear: $mapValue;'
};
exports.default = _default;