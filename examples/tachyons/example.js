import util from 'util';

import ParticleEmitter from '../../src/ParticleEmitter';

import tachyonsConfig from './config';

console.log('config', util.inspect(tachyonsConfig, {showHidden: false, depth: null}));

console.log(
  'tachyons css',
  (new ParticleEmitter(tachyonsConfig)).getCss()          // matches output.css in this folder
);
