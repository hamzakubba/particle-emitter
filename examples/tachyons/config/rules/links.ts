import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const linksCss = getFileContentsAsString(path.resolve(__dirname, '../static/links.css'));

export default [
  'links',
  {
    docsTitle: 'Links',
    staticRules: linksCss,
  },
];
