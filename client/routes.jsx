import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Paragraph from './components/Paragraph/Paragraph';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Paragraph} />
    <Route path="test" component={Paragraph} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
