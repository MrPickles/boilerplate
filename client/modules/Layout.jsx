import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout(props) {
  return (
    <div>
      <Helmet
        title="Boilerplate!"
        meta={[
          { charSet: 'utf=8' },
          { name: 'description', content: 'The description of the site should go here.' },
          { property: 'og:site_name', content: 'Site Name' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ]}
        link={[
          { rel: 'stylesheet', href: '/public/css/semantic.min.css' },
          { rel: 'stylesheet', href: '/public/css/style.css' },
          { rel: 'icon', href: 'https://diegohaz.github.io/arc/icon.png' },
        ]}
      />
      <div className="layout-content">{props.children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.element.isRequired,
};
