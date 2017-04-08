const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

/*
 * Load environment variables.
 */
if (fs.existsSync(path.join(__dirname, '.env'))) {
  dotenv.config();
}

/* eslint-disable global-require */
require('./src/server.js');
/* eslint-enable global-require */
