import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const normalizeCss = getFileContentsAsString(path.resolve(__dirname, '../static/normalize.css'));

export default [
  'normalize',
  {
    docsTitle: 'Normalize.css',

    staticRules: normalizeCss,
  },
];
