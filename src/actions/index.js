const req = require.context('.', true, /^\.\/((?!index|\.spec).)*\.js$/);

req.keys().forEach((key) => {
  const actions = req(key);

  // Export every item exported by other action files.
  Object.keys(actions).forEach((name) => {
    module.exports[name] = actions[name];
  });
});
