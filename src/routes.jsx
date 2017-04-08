import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IndexPage from './components/IndexPage/IndexPage';
import TestPage from './components/TestPage/TestPage';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="test" component={TestPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
