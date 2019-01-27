"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import '../static/_tables.css.txt' */
var tablesCss = "/*\n\n  TABLES\n  Docs: http://tachyons.io/docs/elements/tables/\n\n*/\n\n.collapse {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n.striped--light-silver:nth-child(odd) {\n  background-color: #aaa;\n}\n\n.striped--moon-gray:nth-child(odd) {\n  background-color: #ccc;\n}\n\n.striped--light-gray:nth-child(odd) {\n  background-color: #eee;\n}\n\n.striped--near-white:nth-child(odd) {\n  background-color: #f4f4f4;\n}\n\n.stripe-light:nth-child(odd) {\n  background-color: rgba(255,255,255,.1);\n}\n\n.stripe-dark:nth-child(odd) {\n  background-color: rgba(0,0,0,.1);\n}\n";
var _default = {
  staticRules: tablesCss
};
exports.default = _default;