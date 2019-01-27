export default {
  repeatForMediaQueries: true,
  prefix: 'f',
  map: [
    [['-6', '-headline'], '6'],     // equivalent to ['-6', '6'], ['-headline', '6'],
    [['-5', '-subheadline'], '5'], // equivalent to ['-5', '5'], ['-subheadline', '5'],
    ['1', '3'],
    ['2', '2.25'],
    ['3', '1.5'],
    ['4', '1.25'],
    ['5', '1'],
    ['6', '.875'],
    ['7', '.75'],
  ],
  ruleTemplate: 'font-size: $mapValuerem;',
};