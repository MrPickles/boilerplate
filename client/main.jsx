import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import IO from 'socket.io-client';

import './global.scss';

import routes from './routes';
import configureStore from './store/configureStore';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

const socket = IO();

socket.on('connected', (data) => {
  console.log(data); // eslint-disable-line no-console
});

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('app-root'));
