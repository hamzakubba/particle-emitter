import ParticleEmitter from '../../src/ParticleEmitter';

const simpleConfig = {

  rules: [
    [
      'Acme Corp Text Colors', // the name of the rule, to be used by other libraries to generate docs, unused in css generation
      {
        // particle emitter will loop over this key/value map:
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

};

const particleEmitter = new ParticleEmitter(simpleConfig);

console.log(particleEmitter.getCss());

// output will be:
/*
.red { color: #ff3355; }
.yellow { color: #dddd44; }
.blue { color: #3333dd; }
*/
