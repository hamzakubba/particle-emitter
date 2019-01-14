# Particle Emitter
An Atomic-CSS Library Generator

## Usage
```
npm install --save particle-emitter
```

```
import ParticleEmitter from 'particle-emitter';

// see examples for config structure
const styleConfig = {
  defaultClassTemplate: ...,
  defaultRuleTemplate: ...,
  mediaQueries: ...,
  lists: ...,
  rules: ...,
};

const emitter = new ParticleEmitter(styleConfig));

console.log(emitter.getCss()); // css
```

## Examples

To run the examples, you need to install the dependencies:
```
npm install -g babel-cli

npm install
```

### Tachyons Spacing
A small example that generates the css rules for spacing (padding and margin) from the [Tachyons library's CSS](http://tachyons.io/) is available in [examples/tachyons-spacing-only/](examples/tachyons-spacing-only/).

To run it:
```
npm run tachyons-spacing-only
```

### Tachyons
An example that generates the complete [Tachyons library's CSS](http://tachyons.io/) (or pretty close) is available in [examples/tachyons/](examples/tachyons/).

To run it:
```
npm run tachyons
```
