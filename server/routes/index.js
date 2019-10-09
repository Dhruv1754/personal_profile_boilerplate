var config = require('server/config');
var express = require('express');
var getGITInfo2 =require('../controllers/projectsControl.mjs');

var router = express.Router();

router.use('/backend_call', getGITInfo2);

module.exports = router;