const baseConfig = require('../webpack.config.js');

// Converts Webpack 2 styled "use" array to original loader string.
const convertLoader = (use) =>
  use.map((loader) => {
    let resolved = loader.loader;
    if (loader.options) {
      resolved += '?';
      resolved += Object.keys(loader.options).map((option) =>
        `${option}=${loader.options[option]}`
      ).join('&');
    }
    return resolved;
  }).join('!');

// The webpack config uses the new "use" convention for defining loaders, but
// Storybook seems to only support the loader as a string. This converts the
// loader format from an object back into the old string style.
const loaderRules = [];
baseConfig.module.rules.forEach((rule) => {
  if ('.js'.match(rule.test) === null) {
    loaderRules.push({
      test: rule.test,
      loader: rule.loader || convertLoader(rule.use),
    });
  }
});

module.exports = storybookBaseConfig =>
  Object.assign({}, storybookBaseConfig, {
    resolve: {
      extensions: [''].concat(baseConfig.resolve.extensions),
      alias: baseConfig.resolve.alias,
    },
    module: Object.assign({}, storybookBaseConfig.module, {
      loaders: storybookBaseConfig.module.loaders.concat(loaderRules),
    }),
  });
