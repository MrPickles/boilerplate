import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import IO from 'socket.io-client';
import logger from 'loglevel';

import App from './App';
import configureStore from './configureStore';

if (process.env.NODE_ENV !== 'production') {
  logger.enableAll();
}

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

const socket = IO();

socket.on('connected', (data) => {
  logger.debug(data);
});

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>
  ), document.getElementById('app-root'));
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    require('./App');
    render();
  });
}
