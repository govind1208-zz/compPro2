var express = require('express');
var router = express.Router();

const customers = [
  {name : 'HS', age: 24},
  {name : 'XS', age: 21},
  {name : 'WS', age: 34},
  {name : 'ES', age: 54},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/indexbepost', function(req, res) {
  console.log('in index backend');
  // res.send('respones from be')
  res.status(200).send(customers);
});


module.exports = router;
