"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'd',
  repeatForMediaQueries: true,
  map: [['n', 'none'], ['i', 'inline'], ['b', 'block'], ['ib', 'inline-block'], ['it', 'inline-table'], ['t', 'table'], ['tc', 'table-cell'], ['t-row', 'table-row'], ['t-row-group', 'table-row-group'], ['t-column', 'table-column'], ['t-column-group', 'table-column-group']],
  ruleTemplate: 'display: $mapValue;',
  mapWithDefaultTemplates: [['t--fixed', 'table-layout: fixed; width: 100%;']]
};
exports.default = _default;