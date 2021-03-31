export default [
  'flexboxShrink',
  {
    docsTitle: 'Flexbox: shrink',
    prefix: 'flex-shrink-',
    repeatForMediaQueries: true,
    map: [
      '0',
      '1',
    ],
    ruleTemplate: 'flex-shrink: $mapValue;',
  },
];
