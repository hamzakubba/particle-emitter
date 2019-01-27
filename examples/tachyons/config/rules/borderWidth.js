export default {
  prefix: 'b',
  repeatForMediaQueries: true,
  map: [
    ['w0', '0'],
    ['w1', '.125rem'],
    ['w2', '.25rem'],
    ['w3', '.5rem'],
    ['w4', '1rem'],
    ['w5', '2rem'],
  ],
  ruleTemplate: 'border-width: $mapValue;',
  mapWithDefaultTemplates: [
    ['t-0', 'border-top-width: 0;'],
    ['r-0', 'border-right-width: 0;'],
    ['b-0', 'border-bottom-width: 0;'],
    ['l-0', 'border-left-width: 0;'],
  ],
};
