const Router = require('express').Router;

const sampleController = require('./sampleController');

const router = new Router();

router.get('/ping', sampleController.ping);

module.exports = router;
