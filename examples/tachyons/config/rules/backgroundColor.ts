export default [
  'backgroundColor',
  {
    docsTitle: 'Background colors',
    repeatFor: ['colors'],
    selectorTemplate: '.bg-$colorsKey',
    ruleTemplate: 'background-color: $colorsValue;',
  }
];
