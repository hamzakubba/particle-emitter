export default [
  'rotate',
  {
    docsTitle: 'Rotation',
    prefix: 'rotate-',
    repeatForMediaQueries: true,
    map: [
      '45',
      '90',
      '135',
      '180',
      '225',
      '270',
      '315',
    ],
    ruleTemplate: 'transform: rotate($mapValuedeg);',
  },
];
