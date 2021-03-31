export default [
  'flexboxOrder',
  {
    docsTitle: 'Flexbox: order',
    prefix: 'order-',
    repeatForMediaQueries: true,
    map: [
      ['0', '0'],
      ['1', '1'],
      ['2', '2'],
      ['3', '3'],
      ['4', '4'],
      ['5', '5'],
      ['6', '6'],
      ['7', '7'],
      ['8', '8'],
      ['last', '99999'],
    ],
    ruleTemplate: 'order: $mapValue;',
  },
];
