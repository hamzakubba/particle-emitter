import ParticleEmitter, { ParticleEmitterConfig } from '../../src/ParticleEmitter';

import simple2Config from './config';

const particleEmitter = new ParticleEmitter(simple2Config);

console.log(particleEmitter.getCss());

// output will be:
/*
.red { color: #ff3355; }
.yellow { color: #dddd44; }
.blue { color: #3333dd; }

.bg-red { background-color: #ff3355; }
.bg-yellow { background-color: #dddd44; }
.bg-blue { background-color: #3333dd; }
*/
