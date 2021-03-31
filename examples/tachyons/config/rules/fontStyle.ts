export default [
  'fontStyle',
  {
    docsTitle: 'Font styles',
    repeatForMediaQueries: true,
    map: [
      ['i', 'italic'],
      ['fs-normal', 'normal'],
    ],
    ruleTemplate: 'font-style: $mapValue;',
  },
];
