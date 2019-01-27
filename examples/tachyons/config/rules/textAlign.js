export default {
  prefix: 't',
  repeatForMediaQueries: true,
  map: [
    ['l', 'left'],
    ['r', 'right'],
    ['c', 'center'],
    ['j', 'justify'],
  ],
  ruleTemplate: 'text-align: $mapValue;',
};
