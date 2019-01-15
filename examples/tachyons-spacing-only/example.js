import ParticleEmitter from '../../src/ParticleEmitter';

const tachyonsSpacingOnlyConfig = {

  lists: [
    ['spacingSizes', [
      '0', // equivalent to:   ['0', '0'],
      ['1', '.25rem'],
      ['2', '.5rem'],
      ['3', '1rem'],
      ['4', '2rem'],
      ['5', '4rem'],
      ['6', '8rem'],
      ['7', '16rem'],
    ]],
    ['spacingDirections', [
      ['a', '$mapValue: $spacingSizesValue'],
      ['l', '$mapValue-left: $spacingSizesValue'],
      ['r', '$mapValue-right: $spacingSizesValue'],
      ['b', '$mapValue-bottom: $spacingSizesValue'],
      ['t', '$mapValue-top: $spacingSizesValue'],
      ['v', '$mapValue-top: $spacingSizesValue; $mapValue-bottom: $spacingSizesValue'],
      ['h', '$mapValue-left: $spacingSizesValue; $mapValue-right: $spacingSizesValue'],
    ]],
  ],

  mediaQueries: [
    ['-ns', ['30em', null]],
    ['-m', ['30em', '60em']],
    ['-l', ['60em', null]],
  ],

  rules: [
    [
      'spacing',
      {
        // equivalent to making a list and putting it first in repeatFor below
        map: [
          ['p', 'padding'],
          ['m', 'margin'],
        ],

        // loop over the map and lists as such:
        //   for each item in map:  ($mapKey, $mapValue)                                               <-- map always first
        //     for each item in spacingDirections:  ($spacingDirectionsKey, $spacingDirectionsValue)   <-- first in repeatFor
        //       for each item in spacingSizes:  ($spacingSizesKey, $spacingSizesValue)                <-- second in repeatFor
        //         output "classTemplate: { ruleTemplate; }"
        repeatFor: ['spacingDirections', 'spacingSizes'],

        // repeats the rules for '' (mobile first), '-ns', '-m' and '-l' above
        repeatForMediaQueries: true,

        // e.g. '.pa3' or 'mv7-ns'
        classTemplate: '.$mapKey$spacingDirectionsKey$spacingSizesKey$mediaQuery',

        // e.g. 'padding: .25rem' or 'margin-top: 16rem; margin-bottom: 16rem'
        ruleTemplate: '$spacingDirectionsValue',
      },
    ],
  ],

};

console.log('config', tachyonsSpacingOnlyConfig);

console.log('tachyons spacing only css', (
  new ParticleEmitter(tachyonsSpacingOnlyConfig)).getCss()
);
