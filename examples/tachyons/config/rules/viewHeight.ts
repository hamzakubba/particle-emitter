export default [
  'viewHeight',
  {
    docsTitle: 'Heights in vh',
    prefix: 'vh',
    repeatForMediaQueries: true,
    map: [
      ['-25', '25vh'],
      ['-50', '50vh'],
      ['-75', '75vh'],
      ['-100', '100vh'],
    ],
    ruleTemplate: 'height: $mapValue;',
  },
];
