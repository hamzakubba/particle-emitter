export default [
  'backgroundPosition',
  {
    docsTitle: 'Background positions',
    prefix: 'bg-',
    repeatForMediaQueries: true,
    map: [
      ['center', 'center center'],
      ['top', 'top center'],
      ['right', 'center right'],
      ['bottom', 'bottom center'],
      ['left', 'center left'],
    ],
    ruleTemplate: 'background-repeat: no-repeat; background-position: $mapValue;',
  },
];
