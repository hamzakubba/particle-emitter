export default [
  'hoverBackgroundColor',
  {
    docsTitle: 'Hover+focus background colors',
    repeatFor: ['colors'],
    selectorTemplate: '.hover-bg-$colorsKey:hover, .hover-bg-$colorsKey:focus',
    ruleTemplate: 'background-color: $colorsValue;',
  },
];
