export default {
  prefix: 'mw',
  repeatForMediaQueries: true,
  map: [
    ['-100', '100%'],

    ['1', '1rem'],
    ['2', '2rem'],
    ['3', '4rem'],
    ['4', '8rem'],
    ['5', '16rem'],
    ['6', '32rem'],
    ['7', '48rem'],
    ['8', '64rem'],
    ['9', '96rem'],

    ['-none', 'none'],
  ],
  ruleTemplate: 'max-width: $mapValue;',
};
