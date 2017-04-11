import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import testReducer from './testReducer';
import pingReducer from './pingReducer';

const reducers = {
  routing,
  testReducer,
  pingReducer,
};

export default combineReducers(reducers);
