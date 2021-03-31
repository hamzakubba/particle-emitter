export default [
  'border',
  {
    docsTitle: 'Borders',
    prefix: 'b',
    repeatForMediaQueries: true,
    // for this rule, mapWithDefaultTemplates is equivalent because there
    // is no ruleTemplate nor selectorTemplate defined
    map: [
      ['a', 'border-style: solid; border-width: 1px;'],
      ['t', 'border-top-style: solid; border-top-width: 1px;'],
      ['r', 'border-right-style: solid; border-right-width: 1px;'],
      ['b', 'border-bottom-style: solid; border-bottom-width: 1px;'],
      ['l', 'border-left-style: solid; border-left-width: 1px;'],
      ['n', 'border-style: none; border-width: 0;'],
    ],
  },
];
