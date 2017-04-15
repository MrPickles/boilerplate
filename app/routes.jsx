import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { IndexPageContainer } from 'containers';
import { TestPage, NotFoundPage, Layout } from 'components';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPageContainer} />
    <Route path="test" component={TestPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
