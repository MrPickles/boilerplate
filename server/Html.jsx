import React, { PropTypes } from 'react';

const Html = ({ content }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/public/css/semantic.min.css" />
        <link rel="stylesheet" href="/public/css/style.css" />
        <title>IndexPage</title>
      </head>
      <body>
        <p>This is a paragraph</p>
        <div id="app-root" dangerouslySetInnerHTML={{ __html: content }} />
        <script src="/public/js/bundle.js" />
      </body>
    </html>
  );
};

Html.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Html;
