import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import middlewares from './middlewares';

const configureStore = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
}

export default configureStore;
