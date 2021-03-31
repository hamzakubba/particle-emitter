import util from 'util';

import ParticleEmitter from '../../src/ParticleEmitter';
import tachyonsConfig from './config';
import writeFileContentsFromString from "../../util/writeFileContentsFromString";
import path from "path";

// console.log('config', util.inspect(tachyonsConfig, {showHidden: false, depth: null}));

console.log(
  // 'tachyons css',
  (new ParticleEmitter(tachyonsConfig)).getCss()          // matches output.css in this folder
);

writeFileContentsFromString(path.resolve(__dirname, './output-new.css'), (new ParticleEmitter(tachyonsConfig)).getCss());
