import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import middleware from './middleware';

const configureStore = (initialState) => {
  const store = createStore(reducers, initialState, applyMiddleware(...middleware));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
};

export default configureStore;
