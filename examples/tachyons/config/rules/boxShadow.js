export default {
  prefix: 'shadow-',
  repeatForMediaQueries: true,
  map: [
    ['1', '0px 0px 4px 2px'],
    ['2', '0px 0px 8px 2px'],
    ['3', '2px 2px 4px 2px'],
    ['4', '2px 2px 8px 0px'],
    ['5', '4px 4px 8px 0px'],
  ],
  ruleTemplate: 'box-shadow: $mapValue rgba( 0, 0, 0, 0.2 );',
};
