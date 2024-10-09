var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ondc_initiate',function(req,res){
console.log("entry");
res.json({'Status': "Fail"});
});

module.exports = router;
