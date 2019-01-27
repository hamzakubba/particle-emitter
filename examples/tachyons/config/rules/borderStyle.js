export default {
  prefix: 'b--',
  repeatForMediaQueries: true,
  map: [
    'dotted',
    'dashed',
    'solid',
    'none',
  ],
  ruleTemplate: 'border-style: $mapValue;',
};
