export default [
  'coordinate',
  {
    docsTitle: 'Coordinates',
    repeatFor: ['directions'],
    repeatForMediaQueries: true,
    map: [
      ['-0', '0'],
      ['-1', '1rem'],
      ['-2', '2rem'],
      ['--1', '-1rem'],
      ['--2', '-2rem'],
    ],
    selectorTemplate: '.$directionsKey$mapKey$mediaQuery',
    ruleTemplate: '$directionsKey: $mapValue;',
    mapWithDefaultTemplates: [
      ['absolute--fill', 'top: 0; right: 0; bottom: 0; left: 0;'],
    ],
  },
];
