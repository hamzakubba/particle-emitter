export default {
  repeatForMediaQueries: true,
  map: [
    ['strike', 'line-through'],
    ['underline', 'underline'],
    ['no-underline', 'none'],
  ],
  ruleTemplate: 'text-decoration: $mapValue;',
};
