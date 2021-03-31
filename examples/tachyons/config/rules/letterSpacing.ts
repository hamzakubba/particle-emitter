export default [
  'letterSpacing',
  {
    docsTitle: 'Letter spacing',
    prefix: 'tracked',
    repeatForMediaQueries: true,
    map: [
      ['', '.1em'],
      ['-tight', '-.05em'],
      ['-mega', '.25em'],
    ],
    ruleTemplate: 'letter-spacing: $mapValue;',
  },
];
