import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import styles from './Layout.scss';

const Layout = props => (
  <div className={styles.layout}>
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
    <div className="layout-content">{props.children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
