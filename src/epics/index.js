import { combineEpics } from 'redux-observable';

const epics = [];

// Grab all files (except index and spec files).
const req = require.context('.', true, /^\.\/((?!index|\.spec).)*\.js$/);

req.keys().forEach((key) => {
  // Set store name as base filename and append to the epic array.
  const storeName = key.replace(/^\..*\/(.*)\.js$/, '$1');
  epics.push(req(key).default);
});

const rootEpic = combineEpics(...epics);

export default rootEpic;
