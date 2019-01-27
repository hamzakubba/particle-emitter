"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import '../static/_box-sizing.css.txt' */
var boxSizingCss = "/*\n \n  BOX SIZING\n\n*/\n\nhtml,\nbody,\ndiv,\narticle,\naside,\nsection,\nmain,\nnav,\nfooter,\nheader,\nform,\nfieldset,\nlegend,\npre,\ncode,\na,\nh1,h2,h3,h4,h5,h6,\np,\nul,\nol,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigcaption,\nfigure,\ntextarea,\ntable, \ntd,\nth,\ntr,\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"password\"],\ninput[type=\"tel\"],\ninput[type=\"text\"],\ninput[type=\"url\"],\n.border-box {\n  box-sizing: border-box;\n}\n\n";
var _default = {
  staticRules: boxSizingCss
};
exports.default = _default;