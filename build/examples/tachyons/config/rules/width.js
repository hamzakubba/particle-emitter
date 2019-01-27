"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prefix: 'w',
  repeatForMediaQueries: true,
  map: [['1', '1rem'], ['2', '2rem'], ['3', '4rem'], ['4', '8rem'], ['5', '16rem'], ['-10', '10%'], // 1/10
  ['-20', '20%'], // 2/10 1/5
  ['-25', '25%'], //      1/4
  ['-30', '30%'], // 3/10
  ['-33', '33%'], ['-third', 'calc(100% / 3)'], // 1/3
  ['-34', '34%'], ['-40', '40%'], // 4/10 2/5
  ['-50', '50%'], // 5/10 1/2
  ['-60', '60%'], // 6/10 3/5
  ['-two-thirds', 'calc(100% / 1.5)'], // 2/3
  ['-70', '70%'], // 7/10
  ['-75', '75%'], //      3/4
  ['-80', '80%'], // 8/10 4/5
  ['-90', '90%'], // 9/10
  ['-100', '100%'], // full
  ['-auto', 'auto']],
  ruleTemplate: 'width: $mapValue;'
};
exports.default = _default;