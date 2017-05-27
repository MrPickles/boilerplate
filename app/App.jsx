import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'

import { IndexPageContainer } from 'containers';
import { TestPage, NotFoundPage } from 'components';

const App = () => (
  <div>
    <Helmet
      title="Boilerplate!"
      meta={[
        { name: 'description', content: 'The description of the site should go here.' },
        { property: 'og:site_name', content: 'Site Name' },
      ]}
      link={[
        { rel: 'icon', href: '/public/img/redux.png' },
      ]}
    />
    <Switch>
      <Route exact path="/" component={IndexPageContainer} />
      <Route path="/test" component={TestPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
