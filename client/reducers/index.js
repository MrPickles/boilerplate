import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const reducers = {
  routing,
};

export default combineReducers(reducers);
