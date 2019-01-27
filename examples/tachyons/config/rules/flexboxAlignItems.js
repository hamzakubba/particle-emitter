export default {
  prefix: 'items-',
  repeatForMediaQueries: true,
  map: [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['baseline', 'baseline'],
    ['stretch', 'stretch'],
  ],
  ruleTemplate: 'align-items: $mapValue;',
};
