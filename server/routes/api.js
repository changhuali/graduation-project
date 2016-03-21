var express = require('express');
var router = express.Router();

router.get('/client/login', function(req, res){
    res.end('success');
})

module.exports = router;
