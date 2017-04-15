import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import IO from 'socket.io-client';

import routes from './routes';
import configureStore from './configureStore';

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

const socket = IO();

socket.on('connected', (data) => {
  console.log(data); // eslint-disable-line no-console
});

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </AppContainer>
  ), document.getElementById('app-root'));
};

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    // eslint-disable-next-line global-require
    require('./routes');
    render();
  });
}
