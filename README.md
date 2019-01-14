# Particle Emitter
## An Atomic-CSS Library Generator

### Instructions
```
npm install --save particle-emitter
```

```
import ParticleEmitter from 'particle-emitter';

const emitter = new ParticleEmitter(tachyonsConfig));

console.log(emitter.getCss()); // css
```

### Tachyons
An example that generates the [Tachyons](http://tachyons.io/) CSS output (or pretty close) is available in the [examples](examples/tachyons/tachyons.js) folder.

To run it:
```
npm install -g babel-node

npm install

npm run tachyons
```  
