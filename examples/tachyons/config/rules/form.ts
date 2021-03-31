import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const formsCss = getFileContentsAsString(path.resolve(__dirname, '../static/forms.css'));

export default [
  'form',
  {
    docsTitle: 'Forms',
    staticRules: formsCss,
  },
];
