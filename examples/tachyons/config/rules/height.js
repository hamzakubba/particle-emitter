export default {
  prefix: 'h',
  repeatForMediaQueries: true,
  map: [
    ['1', '1rem'],
    ['2', '2rem'],
    ['3', '4rem'],
    ['4', '8rem'],
    ['5', '16rem'],

    ['-25', '25%'],
    ['-50', '50%'],
    ['-75', '75%'],
    ['-100', '100%'],
  ],
  ruleTemplate: 'height: $mapValue;',
};
