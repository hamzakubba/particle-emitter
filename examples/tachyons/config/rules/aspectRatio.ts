export default [
  'aspectRatio',
  {
    docsTitle: 'Aspect ratios',

    prefix: 'aspect-ratio',
    repeatForMediaQueries: true,

    // map uses the rule's selectorTemplate and ruleTemplate if specified, and falls back
    // to defaultSelectorTemplate and defaultRuleTemplate respectively when unspecified
    map: [
      ['--16x9', '56.25'],
      ['--9x16', '177.77'],
      ['--4x3', '75'],
      ['--3x4', '133.33'],
      ['--6x4', '66.6'],
      ['--4x6', '150'],
      ['--8x5', '62.5'],
      ['--5x8', '160'],
      ['--7x5', '71.42'],
      ['--5x7', '140'],
      ['--1x1', '100'],
    ],
    ruleTemplate: 'padding-bottom: $mapValue%;',

    // mapWithDefaultTemplates uses the defaultSelectorTemplate and defaultRuleTemplate
    mapWithDefaultTemplates: [
      ['', 'height: 0; position: relative;'],
      ['--object', 'position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100;'],
    ],
  },
];
