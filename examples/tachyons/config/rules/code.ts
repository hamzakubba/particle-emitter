import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const codeCss = getFileContentsAsString(path.resolve(__dirname, '../static/code.css'));

export default [
  'code',
  {
    docsTitle: 'Code',
    staticRules: codeCss,
  },
];
