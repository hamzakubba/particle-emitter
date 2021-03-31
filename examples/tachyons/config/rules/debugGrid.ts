import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const debugGridCss = getFileContentsAsString(path.resolve(__dirname, '../static/debug-grid.css'));

export default [
  'debugGrid',
  {
    docsTitle: 'Debug grid',
    staticRules: debugGridCss,
  },
];
