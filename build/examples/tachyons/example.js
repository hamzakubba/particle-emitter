"use strict";

var _util = _interopRequireDefault(require("util"));

var _ParticleEmitter = _interopRequireDefault(require("../../src/ParticleEmitter"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('config', _util.default.inspect(_config.default, {
  showHidden: false,
  depth: null
}));
console.log('tachyons css', new _ParticleEmitter.default(_config.default).getCss() // matches output.css in this folder
);