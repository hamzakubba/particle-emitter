# Particle Emitter
An Atomic-CSS Library Generator

## Usage
```
npm install --save particle-emitter
```
or
```
yarn add particle-emitter
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

To run the examples, clone the repo from github, then install the dependencies:
```
npm install
```
You can then run the 4 examples provided using `npm run [name]`.


### Simple 1
This is the simplest example, and shows the basic syntax. You can see the code in [examples/simple1/](examples/simple1/).

To run it:
```
npm run simple1
```

### Simple 2
This is a slightly more complex example, introducing more syntax such as share-able lists. You can see the code in [examples/simple2/](examples/simple2/).

To run it:
```
npm run simple2
```

### Tachyons Spacing
A small example that generates the css rules for spacing (padding and margin) from the [Tachyons library's CSS](http://tachyons.io/) is available in [examples/tachyons-spacing-only/](examples/tachyons-spacing-only/).

To run it:
```
npm run tachyons-spacing-only
```

### Tachyons
An example that generates the complete [Tachyons library's CSS](http://tachyons.io/) (with very minor differences) is available in [examples/tachyons/](examples/tachyons/).

To run it:
```
npm run tachyons
```
