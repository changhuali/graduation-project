var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graduation_project');
var db = mongoose.connection;
db.on('error', function(error){
    console.log(error);
});
db.once('open', function(){
    console.log("graduation_project connect success");
});
var checkLogin = function(req, res, callback){
    var userSchema = new mongoose.Schema({
        userName: String,
        userPwd : String
    });
    var myModel = db.model('user', userSchema, "user");
    myModel.findOne({userName: req.body.userName, userPwd: req.body.userPwd},function(err, data){
        if(err){
            callback({errorCode: "401", message: "用户名或密码错误"});
        }else{
            console.log(data)
            callback({id: data._id, userName: data.userName});
        }
    })
}


router.post('/client/login', function(req, res){
    checkLogin(req, res, function (data) {
        console.log(data, "---")
        res.statusCode = "200";
        res.send(data);
    });
})

router.get('/client/login', function(req, res){

})

module.exports = router;
