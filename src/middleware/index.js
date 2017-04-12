import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [epicMiddleware, logger];

// Grab all files (except index and spec files).
const req = require.context('.', true, /^\.\/((?!index|\.spec).)*\.js$/);

req.keys().forEach((key) => {
  // Set store name as base filename and prepend to the middleware array.
  const storeName = key.replace(/^\..*\/(.*)\.js$/, '$1');
  middleware.unshift(req(key).default);
});

// Hot reload epics.
if (module.hot) {
  module.hot.accept('../epics', () => {
    // eslint-disable-next-line global-require
    const rootEpicHot = require('../epics').default;
    epicMiddleware.replaceEpic(rootEpicHot);
  });
}

export default middleware;
