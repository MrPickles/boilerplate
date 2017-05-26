// Grab all js files (except index, test, spec, and storybook files).
const req = require.context('.', true, /^\.\/((?!index|\.test|\.spec|\.stories).)*\.jsx?$/);
const logger = require('loglevel');

// Find all js files and export their default modules as its file name.
req.keys().forEach((key) => {
  const componentName = key.replace(/^\..*\/([^/]+)\.jsx?$/, '$1');
  if (module.exports[componentName]) {
    logger.error(`The component "${componentName}" has a duplicate import. Please rename them accordingly.`);
  }
  module.exports[componentName] = req(key).default;
});
