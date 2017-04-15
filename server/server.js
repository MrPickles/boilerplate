const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');
const Socket = require('socket.io');
const compression = require('compression');

const websocket = require('./services/websocket');
const api = require('./api');

const app = express();
const server = http.Server(app);
const io = Socket(server);
const router = express.Router();

// Set up express as an HMR server in development.
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  /* eslint-disable import/no-extraneous-dependencies */
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  /* eslint-enable import/no-extraneous-dependencies */
  const webpackConfig = require('../webpack.config');
  /* eslint-enable global-require */
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

router.use('/api', api);

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('Database connection failed!'); // eslint-disable-line no-console
  process.exit();
});

app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(router);
app.use('/public', express.static(path.join(__dirname, '../dist/public')));
app.use('/public/img', express.static(path.join(__dirname, '../public/img')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

mongoose.connection.once('open', () => {
  server.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log('Server listening on port %d in %s mode.',
        app.get('port'), process.env.NODE_ENV);
  });
});

io.on('connection', websocket);
