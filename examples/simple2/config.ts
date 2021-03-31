import { ParticleEmitterConfig } from "../../src/ParticleEmitter";

export default {

  // lists are key/ruleDescription pairs that can be shared across rules
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
      'textColors', // the key for the rule, can be used by other libraries, unused in css generation
      {
        docsTitle: 'Acme Corp Text Colors', // an optional title for the rule for docs, also unused in css generation

        // particle emitter will loop over this list (a key/ruleDescription map):
        repeatFor: ['colors'],

        // the template variable $colorsValue is based on the provided list name
        ruleTemplate: 'color: $colorsValue;',
      },
    ],

    [
      'backgroundColors',
      {
        docsTitle: 'Acme Corp Background Colors',

        // replaces the template variable $prefix in the selectorTemplate and defaultSelectorTemplate
        prefix: 'bg-',

        repeatFor: ['colors'],

        // the template variable $colorsValue is based on the provided list name
        ruleTemplate: 'background-color: $colorsValue;',
      },
    ],
  ],

} as ParticleEmitterConfig;
