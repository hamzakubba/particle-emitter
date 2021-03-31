export default [
  'borderColor',
  {
    docsTitle: 'Border colors',
    prefix: 'b--',
    repeatFor: ['colors'],
    selectorTemplate: '.$prefix$colorsKey',
    ruleTemplate: 'border-color: $colorsValue;',
  },
];
