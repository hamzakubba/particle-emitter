export default [
  'flexboxAlignSelf',
  {
    docsTitle: 'Flexbox: align-self',
    prefix: 'self-',
    repeatForMediaQueries: true,
    map: [
      ['start', 'flex-start'],
      ['end', 'flex-end'],
      ['center', 'center'],
      ['baseline', 'baseline'],
      ['stretch', 'stretch'],
    ],
    ruleTemplate: 'align-self: $mapValue;',
  },
];
