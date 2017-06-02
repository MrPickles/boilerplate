const logger = require('loglevel');

const req = require.context('.', true, /^\.\/((?!index|\.spec).)*\.js$/);

req.keys().forEach((key) => {
  const actions = req(key);

  // Export every item exported by other action files.
  Object.keys(actions).forEach((name) => {
    if (module.exports[name]) {
      logger.error(`The action "${name}" has a duplicate import. Please rename them accordingly.`);
    }
    module.exports[name] = actions[name];
  });
});
