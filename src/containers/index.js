const req = require.context('.', true, /^\..*\/[^/]+\/index\.js$/);

// Find all recursive instances of "index.js" and export their modules.
req.keys().forEach((key) => {
  const componentName = key.replace(/^\..*\/([^/]+)\/index\.js$/, '$1');
  module.exports[componentName] = req(key).default;
});
