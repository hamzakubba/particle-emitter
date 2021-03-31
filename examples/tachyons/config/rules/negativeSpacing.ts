export default [
  'negativeSpacing',
  {
    docsTitle: 'Negative spacing (padding and margin)',
    repeatForMediaQueries: true,
    repeatFor: ['spacingNegativeDirections', 'spacingNegativeSizes'],
    map: [
      ['n', 'margin'],
    ],
    selectorTemplate: '.$mapKey$spacingNegativeDirectionsKey$spacingNegativeSizesKey$mediaQuery',
    ruleTemplate: '$spacingNegativeDirectionsValue;',
  },
];
