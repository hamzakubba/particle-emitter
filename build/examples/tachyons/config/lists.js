"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("./lists/colors"));

var _directions = _interopRequireDefault(require("./lists/directions"));

var _spacingSizes = _interopRequireDefault(require("./lists/spacingSizes"));

var _spacingDirections = _interopRequireDefault(require("./lists/spacingDirections"));

var _spacingNegativeSizes = _interopRequireDefault(require("./lists/spacingNegativeSizes"));

var _spacingNegativeDirections = _interopRequireDefault(require("./lists/spacingNegativeDirections"));

var _overflows = _interopRequireDefault(require("./lists/overflows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [['colors', _colors.default], ['directions', _directions.default], ['spacingSizes', _spacingSizes.default], ['spacingDirections', _spacingDirections.default], ['spacingNegativeSizes', _spacingNegativeSizes.default], ['spacingNegativeDirections', _spacingNegativeDirections.default], ['overflows', _overflows.default]];
exports.default = _default;