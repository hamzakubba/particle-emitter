import { ParticleEmitterConfig } from "../../src/ParticleEmitter";

export default {

  rules: [
    [
      'textColors', // the key for the rule, can be used by other libraries, unused in css generation
      {
        docsTitle: 'Acme Corp Text Colors', // an optional title for the rule for docs, also unused in css generation

        // particle emitter will loop over this key/ruleDescription map:
        map: [
          ['red', '#ff3355'],
          ['yellow', '#dddd44'],
          ['blue', '#3333dd'],
        ],

        // the selector in the css will look like this:
        selectorTemplate: '.$mapKey',

        // the rule (aka 'declaration block') in the css will look like this:
        ruleTemplate: 'color: $mapValue;',
      },
    ],
  ],

} as ParticleEmitterConfig;
