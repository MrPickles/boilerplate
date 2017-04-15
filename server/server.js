const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');
const Socket = require('socket.io');
const compression = require('compression');
const winston = require('winston');

const websocket = require('./services/websocket');
const api = require('./api');

const app = express();
const server = http.Server(app);
const io = Socket(server);
const router = express.Router();

// Set up express as an HMR server in development.
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('./hmr')(app);
}

router.use('/api', api);

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  winston.error('Database connection failed!');
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
    winston.info(`Server listening on port ${app.get('port')} in ${process.env.NODE_ENV} mode.`);
  });
});

io.on('connection', websocket);
