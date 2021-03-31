import util from 'util';

import ParticleEmitter from '../../src/ParticleEmitter';

import tachyonsSpacingOnlyConfig from './config';

console.log('config', util.inspect(tachyonsSpacingOnlyConfig, {showHidden: false, depth: null}));

const particleEmitter = new ParticleEmitter(tachyonsSpacingOnlyConfig);

console.log(
  'tachyons spacing only css',
  particleEmitter.getCss()         // matches output.css in this folder
);
