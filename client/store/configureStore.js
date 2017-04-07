import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';
import middleware from '../middleware';

const configureStore = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(...middleware));
};

export default configureStore;
