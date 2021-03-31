import tachyonsConfig from '../examples/tachyons/config';
import createFolder from "../util/createFolder";
import getFileContentsAsString from "../util/getFileContentsAsString";
import writeFileContentsFromString from "../util/writeFileContentsFromString";

const buildPath = 'build/';
const packageJsonStr = getFileContentsAsString('package.json');


/* particle-emitter */
const particleEmitterBuildPath = buildPath + 'particle-emitter/';

const particleEmitterPackageJson = JSON.parse(packageJsonStr);

particleEmitterPackageJson.main = particleEmitterPackageJson.main.replace(particleEmitterBuildPath, '');
particleEmitterPackageJson.types = particleEmitterPackageJson.main.replace('.js', '.d.ts');
delete particleEmitterPackageJson.devDependencies;
delete particleEmitterPackageJson.scripts;

writeFileContentsFromString(
  particleEmitterBuildPath + 'package.json',
  JSON.stringify(particleEmitterPackageJson, null, 2) + '\n'
);


const readmeStr = getFileContentsAsString('README.md');
writeFileContentsFromString(
  particleEmitterBuildPath + 'README.md',
  readmeStr.replace(/\(examples/g, `(${particleEmitterPackageJson.homepage}/tree/master/examples`)
);

const licenseStr = getFileContentsAsString('LICENSE');
writeFileContentsFromString(
  particleEmitterBuildPath + 'LICENSE',
  licenseStr
);


/* particle-emitter-tachyons-config */
const tachyonsConfigBuildPath = buildPath + 'particle-emitter-tachyons-config/';

createFolder(tachyonsConfigBuildPath);

const tachyonsConfigPackageJson = JSON.parse(packageJsonStr);

tachyonsConfigPackageJson.name += '-tachyons-config';
tachyonsConfigPackageJson.main = './TachyonsConfig.js';
delete tachyonsConfigPackageJson.devDependencies;
delete tachyonsConfigPackageJson.scripts;

writeFileContentsFromString(
  tachyonsConfigBuildPath + 'package.json',
  JSON.stringify(tachyonsConfigPackageJson, null, 2) + '\n'
);

const configFileContents = `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
  
exports.default = ${JSON.stringify(tachyonsConfig)};
`.trim() + '\n';

writeFileContentsFromString(
  tachyonsConfigBuildPath + 'TachyonsConfig.js',
  configFileContents
);
