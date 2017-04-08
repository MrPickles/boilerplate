import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const Html = ({ state, content }) => {
  const helmet = Helmet.rewind();

  /* eslint-disable react/no-danger */
  return (
    <html lang="en">
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
      </head>
      <body>
        <div id="app-root" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        <script src="/public/js/bundle.js" />
      </body>
    </html>
  );
  /* eslint-enable react/no-danger */
};

Html.propTypes = {
  content: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Html;
