import path from 'path';

import getFileContentsAsString from '../../../../util/getFileContentsAsString';

const imagesCss = getFileContentsAsString(path.resolve(__dirname, '../static/images.css'));

export default [
  'image',
  {
    docsTitle: 'Keep images inside parent',

    staticRules: imagesCss,
  },
];
