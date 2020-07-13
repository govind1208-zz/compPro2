var express = require('express');
var router = express.Router();
var debug = require('debug');
const axios = require('axios');
// const beapi = '127.0.0.1:8080/'+'indexbepost'
const beapi = 'http://localhost:8080/'+'indexbepost'

/* GET home page. */
router.get('/', function(req, res, next) {
  debug('in index js using debug')
  res.render('index1', { title: 'Express' });
});

router.get('/index1', function(req, res) {
  // debug('in index js using hello')
  res.render('index1', { title: 'Hello Express', customer: false });
});

router.post('/index1post', function(req, res) {
  // res.send(req.body);
  axios.get(beapi)
    .then(function (response) {
      // res.status(200).send({cust: response.data})
      res.render('index1', {title: 'Hello Express', customer: response.data})
    }).catch(function (error) {
      console.log('error: ', error.code );
      res.status(400).send(error.code)
    })
});

router.post('testing', (req, res)=>{
  res.send(200, 'hello world')
})

module.exports = router;
