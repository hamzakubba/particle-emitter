export default {
  prefix: 'v-',
  repeatForMediaQueries: true,
  map: [
    ['base', 'baseline'],
    ['mid', 'middle'],
    ['top', 'top'],
    ['btm', 'bottom'],
  ],
  ruleTemplate: 'vertical-align: $mapValue;',
};
