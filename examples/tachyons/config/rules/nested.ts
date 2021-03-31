import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const nestedCss = getFileContentsAsString(path.resolve(__dirname, '../static/nested.css'));

export default [
  'nested',
  {
    docsTitle: 'Nested',
    staticRules: nestedCss,
  },
];
