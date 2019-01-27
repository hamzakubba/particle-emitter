export default {
  prefix: 'content-',
  repeatForMediaQueries: true,
  map: [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['stretch', 'stretch'],
  ],
  ruleTemplate: 'align-content: $mapValue;',
};
