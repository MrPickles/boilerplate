import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';
import middleware from '../middleware';

const configureStore = initialState =>
  createStore(reducers, initialState, applyMiddleware(...middleware));

export default configureStore;
