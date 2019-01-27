export default {
  prefix: 'tt',
  repeatForMediaQueries: true,
  map: [
    ['c', 'capitalize'],
    ['l', 'lowercase'],
    ['u', 'uppercase'],
    ['n', 'none'],
  ],
  ruleTemplate: 'text-transform: $mapValue;',
};
