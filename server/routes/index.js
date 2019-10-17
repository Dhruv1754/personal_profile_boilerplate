var config = require('server/config');
var express = require('express');
var getMongoInfo =require('../controllers/mongoDBquery.mjs');

var router = express.Router();

router.use('/backend_call', getMongoInfo);

module.exports = router;