import { resolve } from 'path';
import test from 'tape';

import ParticleEmitter from '../src/ParticleEmitter';
import getFileContentsAsString from '../util/getFileContentsAsString';

import simple1Config from '../examples/simple1/config';
import simple2Config from '../examples/simple2/config';
import tachyonsSpacingOnlyConfig from '../examples/tachyons-spacing-only/config';
import tachyonsConfig from '../examples/tachyons/config';

test('simple1', t => {
  const particleEmitter = new ParticleEmitter(simple1Config);

  t.equal(
    particleEmitter.getCss(), `
.red { color: #ff3355; }
.yellow { color: #dddd44; }
.blue { color: #3333dd; }
`.substring(1)); // remove initial new line

  t.end();
});

test('simple2', t => {
  const particleEmitter = new ParticleEmitter(simple2Config);

  t.equal(
    particleEmitter.getCss(), `
.red { color: #ff3355; }
.yellow { color: #dddd44; }
.blue { color: #3333dd; }

.bg-red { background-color: #ff3355; }
.bg-yellow { background-color: #dddd44; }
.bg-blue { background-color: #3333dd; }
`.substring(1)); // remove initial new line

  t.end();
});

test('tachyons-spacing-only', t => {
  const particleEmitter = new ParticleEmitter(tachyonsSpacingOnlyConfig);
  const expectedOutput = getFileContentsAsString(resolve(__dirname, '../examples/tachyons-spacing-only/output.css'));

  t.equal(particleEmitter.getCss(), expectedOutput);

  t.end();
});

test('tachyons', t => {
  const particleEmitter = new ParticleEmitter(tachyonsConfig);
  const expectedOutput = getFileContentsAsString(resolve(__dirname, '../examples/tachyons/output.css'));

  t.equal(particleEmitter.getCss(), expectedOutput);

  t.end();
});
