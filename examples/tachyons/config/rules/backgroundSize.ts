export default [
  'backgroundSize',
  {
    docsTitle: 'Background sizes',
    prefix: '',
    repeatForMediaQueries: true,
    map: [
      ['cover', 'cover'],
      ['contain', 'contain'],
    ],
    ruleTemplate: 'background-size: $mapValue!important;',
  },
];
