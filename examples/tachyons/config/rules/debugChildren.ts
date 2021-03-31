import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const debugChildrenCss = getFileContentsAsString(path.resolve(__dirname, '../static/debug-children.css'));

export default [
  'debugChildren',
  {
    docsTitle: 'Debug children',
    staticRules: debugChildrenCss,
  },
];
