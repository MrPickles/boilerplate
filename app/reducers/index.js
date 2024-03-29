import { combineReducers } from 'redux';
import logger from 'loglevel';

const reducers = {};

// Grab all files (except index and spec files).
const req = require.context('.', true, /^\.\/((?!index|\.spec).)*\.js$/);

req.keys().forEach((key) => {
  // Set store name as base filename.
  const storeName = key.replace(/^\..*\/(.*)\.js$/, '$1');
  if (reducers[storeName]) {
    logger.error(`The store "${storeName}" has a duplicate import. Please rename them accordingly.`);
  }
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);
