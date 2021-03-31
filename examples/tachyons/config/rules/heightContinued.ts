export default [
  'heightContinued',
  {
    docsTitle: 'Heights continued',
    prefix: 'h',
    repeatForMediaQueries: true,
    map: [
      ['-auto', 'auto'],
      ['-inherit', 'inherit'],
    ],
    ruleTemplate: 'height: $mapValue;',
  },
];
