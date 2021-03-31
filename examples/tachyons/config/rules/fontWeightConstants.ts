export default [
  'fontWeightConstants',
  {
    docsTitle: 'Base font weights',
    repeatForMediaQueries: true,
    map: [
      'normal',
      ['b', 'bold'],
    ],
    ruleTemplate: 'font-weight: $mapValue;',
  },
];
