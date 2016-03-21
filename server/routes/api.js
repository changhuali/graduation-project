var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graduation_project');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback){
    console.log("graduation_project connect success")
});

router.post('/client/login', function(req, res){
    console.log(req.body,"----")
    res.send({user: true});
})

module.exports = router;
