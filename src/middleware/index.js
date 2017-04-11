import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

module.exports = [epicMiddleware];
