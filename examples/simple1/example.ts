import ParticleEmitter from '../../src/ParticleEmitter';

import simple1Config from './config';

const particleEmitter = new ParticleEmitter(simple1Config);

console.log(particleEmitter.getCss());

// output will be:
/*
.red { color: #ff3355; }
.yellow { color: #dddd44; }
.blue { color: #3333dd; }
*/
