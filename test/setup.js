const jsdom = require('jsdom').jsdom;

// Creates a virtual DOM for tests that mount React components.
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (global[property] === undefined) {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
