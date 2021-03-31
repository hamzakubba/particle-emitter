export default [
  'hoverColor',
  {
    docsTitle: 'Hover+focus skins / text colors',
    repeatFor: ['colors'],
    selectorTemplate: '.hover-$colorsKey:hover, .hover-$colorsKey:focus',
    ruleTemplate: 'color: $colorsValue;',
  },
];
