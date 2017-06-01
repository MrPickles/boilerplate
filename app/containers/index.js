import logger from 'loglevel';

// Grab all js files (except index, test, spec, and storybook files).
const req = require.context('.', true, /^\.\/((?!index|\.test|\.spec|\.stories).)*\.jsx?$/);

// Find all js files and export their default modules as its file name.
req.keys().forEach((key) => {
  const containerName = key.replace(/^\..*\/([^/]+)\.jsx?$/, '$1');
  if (module.exports[containerName]) {
    logger.error(`The component "${containerName}" has a duplicate import. Please rename them accordingly.`);
  }
  module.exports[containerName] = req(key).default;
});
