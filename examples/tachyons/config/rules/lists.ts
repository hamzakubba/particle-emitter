import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const listsCss = getFileContentsAsString(path.resolve(__dirname, '../static/lists.css'));

export default [
  'lists',
  {
    docsTitle: 'Lists',
    staticRules: listsCss,
  },
];
