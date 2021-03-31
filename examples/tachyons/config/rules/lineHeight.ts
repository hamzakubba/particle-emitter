export default [
  'lineHeight',
  {
    docsTitle: 'Line heights',
    prefix: 'lh-',
    repeatForMediaQueries: true,
    map: [
      ['solid', '1'],
      ['title', '1.25'],
      ['copy', '1.5'],
    ],
    ruleTemplate: 'line-height: $mapValue;',
  },
];
