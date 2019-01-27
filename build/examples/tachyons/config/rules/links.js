"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import '../static/_links.css.txt' */
var linksCss = "/*\n\n   LINKS\n   Docs: http://tachyons.io/docs/elements/links/\n\n*/\n\n.link {\n  text-decoration: none;\n  transition: color .15s ease-in;\n}\n\n.link:link,\n.link:visited {\n  transition: color .15s ease-in;\n}\n.link:hover   {\n  transition: color .15s ease-in;\n}\n.link:active  {\n  transition: color .15s ease-in;\n}\n.link:focus   {\n  transition: color .15s ease-in;\n  outline: 1px dotted currentColor;\n}\n\n";
var _default = {
  staticRules: linksCss
};
exports.default = _default;