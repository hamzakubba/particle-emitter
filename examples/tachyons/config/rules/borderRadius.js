export default {
  prefix: 'br',
  repeatForMediaQueries: true,
  map: [
    ['0', '0'],
    ['1', '.125rem'],
    ['2', '.25rem'],
    ['3', '.5rem'],
    ['4', '1rem'],
    ['-100', '100%'],
    ['-pill', '9999px'],
  ],
  ruleTemplate: 'border-radius: $mapValue;',
  mapWithDefaultTemplates: [
    ['--bottom', 'border-top-left-radius: 0; border-top-right-radius: 0;'],
    ['--top', 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;'],
    ['--right', 'border-top-left-radius: 0; border-bottom-left-radius: 0;'],
    ['--left', 'border-top-right-radius: 0; border-bottom-right-radius: 0;'],
  ],
};
