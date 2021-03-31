import { ParticleEmitterConfig } from "../../src/ParticleEmitter";

import mediaQueries from './config/mediaQueries';
import lists from './config/lists';
import rules from './config/rules';

const tachyonsConfig = {
  defaultSelectorTemplate: '.$prefix$mapKey$suffix$mediaQuery',
  defaultRuleTemplate: '$mapValue',
  mediaQueries,
  lists,
  rules,
} as ParticleEmitterConfig;

export default tachyonsConfig;
