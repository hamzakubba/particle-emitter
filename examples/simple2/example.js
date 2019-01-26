import ParticleEmitter from '../../src/ParticleEmitter';

const simpleConfig = {

  // lists are key/value pairs that can be shared across rules
  lists: [
    ['colors', [
      ['red', '#ff3355'],
      ['yellow', '#dddd44'],
      ['blue', '#3333dd'],
    ]],
  ],

  // the defaultSelectorTemplate will be applied to all rules that do not specify a selectorTemplate
  defaultSelectorTemplate: '.$prefix$colorsKey',
  // the template variable $prefix ($suffix also available) is replaced with the rule's prefix, see below
  // the template variable $colorsKey is based on the provided list name ("colors" in this example, but can be anything)

  // you can also specify a defaultRuleTemplate

  rules: [
    [
      'Acme Corp Text Colors', // the name of the rule, to be used by other libraries to generate docs, unused in css generation
      {
        // particle emitter will loop over this list (a key/value map):
        repeatFor: ['colors'],

        // the template variable $colorsValue is based on the provided list name
        ruleTemplate: 'color: $colorsValue;',
      },
    ],

    [
      'Acme Corp Background Colors',
      {
        // replaces the template variable $prefix in the selectorTemplate and defaultSelectorTemplate
        prefix: 'bg-',

        repeatFor: ['colors'],

        // the template variable $colorsValue is based on the provided list name
        ruleTemplate: 'background-color: $colorsValue;',
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

.bg-red { background-color: #ff3355; }
.bg-yellow { background-color: #dddd44; }
.bg-blue { background-color: #3333dd; }
*/
