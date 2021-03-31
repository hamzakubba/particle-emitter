import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const boxSizingCss = getFileContentsAsString(path.resolve(__dirname, '../static/box-sizing.css'));

export default [
  'boxSizing',
  {
    docsTitle: 'Default box-sizing to border-box',

    staticRules: boxSizingCss,
  },
];
