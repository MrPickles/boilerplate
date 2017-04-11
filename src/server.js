const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');
const Socket = require('socket.io');
const compression = require('compression');

/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
/* eslint-enable import/no-extraneous-dependencies */

const websocket = require('./services/websocket');

const webpackConfig = require('../webpack.config');

const app = express();
const server = http.Server(app);
const io = Socket(server);
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('Database connection failed!'); // eslint-disable-line no-console
  process.exit();
});

app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use('/public', express.static(path.join(__dirname, '../dist/public')));
app.use('/public/css',
    express.static(path.join(__dirname, '../node_modules/semantic-ui-css')));
app.use('/public/img', express.static(path.join(__dirname, '../public/img')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

mongoose.connection.once('open', () => {
  server.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log('Server listening on port %d in %s mode.',
        app.get('port'), process.env.NODE_ENV);
  });
});

io.on('connection', websocket);
