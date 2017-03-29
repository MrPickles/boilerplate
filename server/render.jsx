import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import routes from '../client/routes';
import reducers from '../client/reducers';
import middlewares from '../client/middlewares';

import ErrorPage from '../client/modules/ErrorPage';
import NotFoundPage from '../client/modules/NotFoundPage';

export default (req, res) => {
  const store = createStore(reducers, {}, applyMiddleware(...middlewares));
  const history = syncHistoryWithStore(createMemoryHistory(), store);

  match({
    history,
    routes,
    location: req.url,
  }, (err, redirectLocation, renderProps) => {
    let markup;

    if (redirectLocation) {
      return res.redirect(302,
          redirectLocation.pathname + redirectLocation.search);
    }

    if (err) {
      console.log(err); // eslint-disable-line no-console
      res.status(500);
      markup = renderToString(<ErrorPage />);
    } else if (renderProps) {
      // Give 404 status code if we're supposed to render a 404 page.
      if (renderProps.components.indexOf(NotFoundPage) !== -1) {
        res.status(404);
      }
      markup = renderToString((
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      ));
    } else {
      res.status(404);
      markup = renderToString(<NotFoundPage />);
    }
    return res.render('index', { markup });
  });
};
