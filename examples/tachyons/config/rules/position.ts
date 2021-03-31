export default [
  'position',
  {
    docsTitle: 'Position',
    repeatForMediaQueries: true,
    map: ['static', 'relative', 'absolute', 'fixed'],
    ruleTemplate: 'position: $mapValue;',
  },
];
