import ParticleEmitter from '../../src/ParticleEmitter';

const mediaQueries = [
  ['-ns', ['30em', null]],
  ['-m', ['30em', '60em']],
  ['-l', ['60em', null]],
];

const spacingSizes = [
  ['0', '0'],
  ['1', '.25rem'],
  ['2', '.5rem'],
  ['3', '1rem'],
  ['4', '2rem'],
  ['5', '4rem'],
  ['6', '8rem'],
  ['7', '16rem'],
];

const spacingDirections = [
  ['a', '$value: $spacingSizesValue'],
  ['l', '$value-left: $spacingSizesValue'],
  ['r', '$value-right: $spacingSizesValue'],
  ['b', '$value-bottom: $spacingSizesValue'],
  ['t', '$value-top: $spacingSizesValue'],
  ['v', '$value-top: $spacingSizesValue; $value-bottom: $spacingSizesValue'],
  ['h', '$value-left: $spacingSizesValue; $value-right: $spacingSizesValue'],
];

const lists = [
  ['spacingSizes', spacingSizes],
  ['spacingDirections', spacingDirections],
];

const defaultClassTemplate = '.$prefix$key$suffix$mediaQuery';
const defaultRuleTemplate = '$value';

const rules = [
  [
    'spacing',
    {
      repeatForMediaQueries: true,
      repeatFor: ['spacingDirections', 'spacingSizes'],
      map: [
        ['p', 'padding'],
        ['m', 'margin'],
      ],
      classTemplate: '.$key$spacingDirectionsKey$spacingSizesKey$mediaQuery',
      ruleTemplate: '$spacingDirectionsValue',
    },
  ],
];

const tachyonsSpacingOnlyConfig = {
  lists,
  defaultClassTemplate,
  defaultRuleTemplate,
  mediaQueries,
  rules,
};

console.log('config', tachyonsSpacingOnlyConfig);

console.log('tachyons spacing only css', (
  new ParticleEmitter(tachyonsSpacingOnlyConfig)).getCss()
);
