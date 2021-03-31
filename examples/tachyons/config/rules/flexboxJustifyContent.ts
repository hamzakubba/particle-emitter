export default [
  'flexboxJustifyContent',
  {
    docsTitle: 'Flexbox: justify-content',
    prefix: 'justify-',
    repeatForMediaQueries: true,
    map: [
      ['start', 'flex-start'],
      ['end', 'flex-end'],
      ['center', 'center'],
      ['between', 'space-between'],
      ['around', 'space-around'],
    ],
    ruleTemplate: 'justify-content: $mapValue;',
  },
];
