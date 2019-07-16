var express = require('express')
var router = express.Router();

router
  .get('/', function(req, res){
    // render the /tests view
    res.send('Hello World! THIS IS FROM ROUTER.JS')
  })

module.exports = router;
