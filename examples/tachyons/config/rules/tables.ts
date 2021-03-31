import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const tablesCss = getFileContentsAsString(path.resolve(__dirname, '../static/tables.css'));

export default [
  'tables',
  {
    docsTitle: 'Tables',
    staticRules: tablesCss,
  },
];
