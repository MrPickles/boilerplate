import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IndexPageContainer from './containers/IndexPageContainer';
import TestPage from './components/TestPage';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPageContainer} />
    <Route path="test" component={TestPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
