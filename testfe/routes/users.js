var express = require('express');
var router = express.Router();
var debug = require('debug');

/* GET users listing. */
router.get('/', function(req, res, next) {
  debug('in user js using debug')
  res.send('respond with a resource');
});

module.exports = router;
