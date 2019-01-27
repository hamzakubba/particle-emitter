export default {
  prefix: 'overflow',
  repeatFor: ['overflows'],
  repeatForMediaQueries: true,
  map: ['', '-x', '-y'],
  selectorTemplate: '.$prefix$mapKey-$overflowsKey$mediaQuery',
  ruleTemplate: 'overflow$mapKey: $overflowsKey;',
};
