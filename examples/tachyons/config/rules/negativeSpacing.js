export default {
  repeatForMediaQueries: true,
  repeatFor: ['spacingNegativeDirections', 'spacingNegativeSizes'],
  map: [
    ['n', 'margin'],
  ],
  selectorTemplate: '.$mapKey$spacingNegativeDirectionsKey$spacingNegativeSizesKey$mediaQuery',
  ruleTemplate: '$spacingNegativeDirectionsValue;',
};
