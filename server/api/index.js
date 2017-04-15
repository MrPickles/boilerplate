const Router = require('express').Router;

const sampleApi = require('./sampleApi');

const router = new Router();

router.use('/sampleApi', sampleApi);

module.exports = router;
