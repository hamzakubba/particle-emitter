"use strict";

var _ParticleEmitter = _interopRequireDefault(require("../../src/ParticleEmitter"));

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tachyonsSpacingOnlyConfig = {
  lists: [['spacingSizes', ['0', // equivalent to:   ['0', '0'],
  ['1', '.25rem'], ['2', '.5rem'], ['3', '1rem'], ['4', '2rem'], ['5', '4rem'], ['6', '8rem'], ['7', '16rem']]], ['spacingDirections', [['a', '$mapValue: $spacingSizesValue'], ['l', '$mapValue-left: $spacingSizesValue'], ['r', '$mapValue-right: $spacingSizesValue'], ['b', '$mapValue-bottom: $spacingSizesValue'], ['t', '$mapValue-top: $spacingSizesValue'], ['v', '$mapValue-top: $spacingSizesValue; $mapValue-bottom: $spacingSizesValue'], ['h', '$mapValue-left: $spacingSizesValue; $mapValue-right: $spacingSizesValue']]]],
  mediaQueries: [['-ns', ['30em', null]], ['-m', ['30em', '60em']], ['-l', ['60em', null]]],
  rules: [['spacing', // the name of the rule, to be used by other libraries to generate docs, unused in css generation
  {
    // equivalent to making a list and putting it first in repeatFor below
    map: [['p', 'padding'], ['m', 'margin']],
    // loop over the map and lists as such:
    //   for <k,v> in map:  ($mapKey, $mapValue)                                               <-- map always first
    //     for <k,v> in spacingDirections:  ($spacingDirectionsKey, $spacingDirectionsValue)   <-- first in repeatFor
    //       for <k,v> in spacingSizes:  ($spacingSizesKey, $spacingSizesValue)                <-- second in repeatFor
    //         output "selectorTemplate: { ruleTemplate; }"
    repeatFor: ['spacingDirections', 'spacingSizes'],
    // repeats the rules for '' (mobile first), '-ns', '-m' and '-l' above
    repeatForMediaQueries: true,
    // e.g. '.pa3' or 'mv7-ns'
    selectorTemplate: '.$mapKey$spacingDirectionsKey$spacingSizesKey$mediaQuery',
    // e.g. 'padding: .25rem' or 'margin-top: 16rem; margin-bottom: 16rem'
    ruleTemplate: '$spacingDirectionsValue;'
  }]]
};
console.log('config', _util.default.inspect(tachyonsSpacingOnlyConfig, {
  showHidden: false,
  depth: null
}));
var particleEmitter = new _ParticleEmitter.default(tachyonsSpacingOnlyConfig);
console.log('tachyons spacing only css', particleEmitter.getCss() // matches output.css in this folder
);