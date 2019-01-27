export default {
  repeatForMediaQueries: true,
  repeatFor: ['spacingDirections', 'spacingSizes'],
  map: [
    ['p', 'padding'],
    ['m', 'margin'],
  ],
  selectorTemplate: '.$mapKey$spacingDirectionsKey$spacingSizesKey$mediaQuery',
  ruleTemplate: '$spacingDirectionsValue;',
};
