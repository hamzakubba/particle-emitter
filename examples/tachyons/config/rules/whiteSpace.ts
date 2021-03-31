export default [
  'whiteSpace',
  {
    docsTitle: 'White space',
    repeatForMediaQueries: true,
    map: [
      ['ws-normal', 'normal'],
      ['nowrap', 'nowrap'],
      ['pre', 'pre'],
    ],
    ruleTemplate: 'white-space: $mapValue;',
  },
];
