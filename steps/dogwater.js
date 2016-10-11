const Houra = require('houra');
const internals = {};

internals.DogwaterStep = module.exports = step => {

  step.plugin = {
    register: 'dogwater',
    options: {
      adapters: step.bag('adapters', []),
      connections: step.bag('connections', {}),
      models: step.bag('models', []),
      teardownOnStop: step.bag('teardownOnStop', true)
    }
  };
};