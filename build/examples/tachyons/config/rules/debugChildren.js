"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import '../static/_debug-children.css.txt' */
var debugChildrenCss = "/*\n\n  DEBUG CHILDREN\n  Docs: http://tachyons.io/docs/debug/\n\n  Just add the debug class to any element to see outlines on its\n  children.\n\n*/\n\n.debug * { outline: 1px solid gold; }\n.debug-white * { outline: 1px solid white; }\n.debug-black * { outline: 1px solid black; }\n\n";
var _default = {
  staticRules: debugChildrenCss
};
exports.default = _default;