"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import '../static/_debug-grid.css.txt' */
var debugGridCss = "/*\n\n   DEBUG GRID\n   http://tachyons.io/docs/debug-grid/\n\n   Can be useful for debugging layout issues\n   or helping to make sure things line up perfectly.\n   Just tack one of these classes onto a parent element.\n\n*/\n\n.debug-grid {\n  background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII=) repeat top left;\n}\n\n.debug-grid-16 {\n  background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII=) repeat top left;\n}\n\n.debug-grid-8-solid {\n  background:white url(data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw==) repeat top left;\n}\n\n.debug-grid-16-solid {\n  background:white url(data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7) repeat top left;\n}\n";
var _default = {
  staticRules: debugGridCss
};
exports.default = _default;