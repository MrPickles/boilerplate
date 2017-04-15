import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const reducers = {
  routing,
};

// Grab all files (except index and spec files).
const req = require.context('.', true, /^\.\/((?!index|\.spec).)*\.js$/);

req.keys().forEach((key) => {
  // Set store name as base filename.
  const storeName = key.replace(/^\..*\/(.*)\.js$/, '$1');
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);
