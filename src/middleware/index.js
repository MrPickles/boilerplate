import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

if (module.hot) {
  module.hot.accept('../epics', () => {
    // eslint-disable-next-line global-require
    const rootEpicHot = require('../epics').default;
    epicMiddleware.replaceEpic(rootEpicHot);
  });
}

module.exports = [epicMiddleware];
