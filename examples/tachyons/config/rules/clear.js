export default {
  staticRules:
    `
.cf:before,
.cf:after { content: " "; display: table; }
.cf:after { clear: both; }
.cf { *zoom: 1; }
`,
  prefix: 'c',
  repeatForMediaQueries: true,
  map: [
    ['l', 'left'],
    ['r', 'right'],
    ['b', 'both'],
    ['n', 'none'],
  ],
  ruleTemplate: 'clear: $mapValue;',
};
