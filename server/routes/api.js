var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/graduation_project');
var db = mongoose.connection;
db.on('error', function(error){
    console.log(error);
});
db.once('open', function(){
    console.log("graduation_project connect success");
});

//查询用户名并核对用户密码
var checkLogin = function(req, callback){
    var userSchema = new mongoose.Schema({
        userName: String,
        userPwd : String
    });
    var myModel = db.model('user', userSchema, "user");
    myModel.findOne({userName: req.body.userName},function(err, data){
        if(err){
            console.log(err);
        }else{
            if(data == null){
                callback("error");
            }else if(req.body.userPwd == data.userPwd){
                console.log(data);
                callback({id: data._id, userName: data.userName});
            }else{
                console.log(data);
                callback("error");
            }
        }
    })
}

//用户登录
router.post('/client/login', function(req, res){
    checkLogin(req, function (data) {
        if(data != "error") {
            res.statusCode = "200";
            res.cookie('info', {id: data.id, userName: data.userName}, {path: '/', maxAge: 30*60*1000});
            res.send(data);
        }else{
            res.statusCode = "401";
            res.send({errorCode: 401, message: "用户名或密码错误"});
        }
    });
})
//保存用户信息到cookie
router.get('/client/info', function(req, res){
    console.log(req.cookies, "-----req.cookie");
    if(req.cookies.info) {
        res.statusCode = "200";
        res.send(req.cookies.info);
    }else{
        res.statusCode = "401";
        res.send({});
    }
})
//用户退出
router.delete('/client/logout', function(req, res){
    res.clearCookie('info');
    res.statusCode = '200';
    res.send({meesage: "logout success"});
})

var checkRegist = function(req, callback) {
    var userSchema = new mongoose.Schema({
        userName: String,
        userPwd : String
    });
    var myModel = db.model('user', userSchema, "user");
    myModel.findOne({userName: req.body.userName}, function(err, data){
        if(err){
            console.log(err);
        }else{
            if(data == null){
                myModel.create({userName: req.body.userName, userPwd: req.body.userPwd}, function(err, data){
                    if(err){
                        console.log(err, "-------------regist insert error");
                        callback("error");
                    }else{
                        callback("ok", {id: data._id, userName: data.userName});
                    }
                })

            }else{
                callback("exist");
            }
        }
    })
}

//用户注册
router.post('/client/regist', function(req, res){
    checkRegist(req, function(status, data){
        if(status == "exist") {
            res.statusCode = "401";
            res.send({errorCode: "401", message: "用户名已存在"})
        }else if(status == "ok"){
            res.statusCode = "200";
            res.send(data)
        }else if(status == "error"){
            res.statusCode == "500";
            res.send({errorCode: "500", message: "创建用户是失败"})
        }
    });
})

module.exports = router;
