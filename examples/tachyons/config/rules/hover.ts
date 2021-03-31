import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const hoversCss = getFileContentsAsString(path.resolve(__dirname, '../static/hovers.css'));

export default [
  'hover',
  {
    docsTitle: 'Hovers',
    staticRules: hoversCss,
  },
];
