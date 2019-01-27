export default {
  prefix: 'min-vh',
  repeatForMediaQueries: true,
  map: [
    ['-100', '100vh'],
  ],
  ruleTemplate: 'min-height: $mapValue;',
};
