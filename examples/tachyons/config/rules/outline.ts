export default [
  'outline',
  {
    docsTitle: 'Outlines',
    prefix: 'outline',
    repeatForMediaQueries: true,
    map: [
      ['', '1px solid'],
      ['-transparent', '1px solid transparent'],
      ['-0', '0'],
    ],
    ruleTemplate: 'outline: $mapValue;',
  },
];