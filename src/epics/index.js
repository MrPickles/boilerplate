import { combineEpics } from 'redux-observable';

import pingEpic from './pingEpic';

const rootEpic = combineEpics(pingEpic);

export default rootEpic;
