export default [
  'minHeight',
  {
    docsTitle: 'Min heights',
    prefix: 'min-h',
    repeatForMediaQueries: true,
    map: [
      ['-100', '100%'],
    ],
    ruleTemplate: 'min-height: $mapValue;',
  },
];
