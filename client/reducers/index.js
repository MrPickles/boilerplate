import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import testReducer from './testReducer';

const reducers = {
  routing,
  testReducer,
};

export default combineReducers(reducers);
