import util from 'util';

import ParticleEmitter from '../../src/ParticleEmitter';

import mediaQueries from './config/media-queries';
import lists from './config/lists';
import rules from './config/rules';

const tachyonsConfig = {
  defaultSelectorTemplate: '.$prefix$mapKey$suffix$mediaQuery',
  defaultRuleTemplate: '$mapValue',
  mediaQueries,
  lists,
  rules,
};

console.log('config', util.inspect(tachyonsConfig, {showHidden: false, depth: null}));

console.log(
  'tachyons css',
  (new ParticleEmitter(tachyonsConfig)).getCss()          // matches output.css in this folder
);
