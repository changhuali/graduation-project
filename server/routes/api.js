var express  = require('express');
var alidayu  = require('../alidayu/test');
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
    var checkSchema = new mongoose.Schema({
        userName: String,
        checkCode : String
    });
    var checkModel = db.model('checkCode', checkSchema, "checkCode");
    if(req.cookies.checkCode) {
      checkModel.findOne({userName: req.body.userName}, function(err, data){
        console.log(req.body.checkCode, data);
        if(err){
          console.log(err);
        }else if(req.body.checkCode == data.checkCode) {
          myModel.find({userName: req.body.userName}, function(err, data){
            if(err){
              console.log(err);
            }else{
              console.log(data, '=======data');
              if(data == null || data.length == 0){

                myModel.create({userName: req.body.userName, userPwd: req.body.userPwd}, function(err, data){
                  if(err){
                    console.log(err, "-------------regist insert error");
                    callback("error");
                  }else{
                    callback("ok", {id: data._id, userName: data.userName});
                  }
                });

              }else{
                callback("exist");
              }
            }
          });
        }else{
          callback("checkFail");
        }
      });
    }else{
      callback("checkInvalid");
    }
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
            res.send({errorCode: "500", message: "服务器内部错误"})
        }else if(status == "checkInvalid") {
            res.statusCode == "401001";
            res.send({errorCode: "401", message: "验证码失效,请重新获取"});
        }else if(status == "checkFail") {
            res.statusCode == "401002";
            res.send({errorCode: "401", message: "验证码错误"});
        }
    });
})

//生成验证码
function createCheckCode(base, len) {
    var str = '';
    for(var i = 1; i <= len; i++) {
        str += Math.round(base*Math.random());
    }
    return str;
}
//发送并保存验证码
function postCheckCode(phone, random) {
    alidayu.execute('alibaba.aliqin.fc.sms.num.send', {
        'extend':'123456',
        'sms_type':'normal',
        'sms_free_sign_name':'大鱼测试',
        'sms_param': {"code":random,"product":"国风装修"},
        'rec_num': phone,
        'sms_template_code':'SMS_7760522'
    }, function(error, response) {
        if (!error) {
            console.log(response);
            var checkSchema = new mongoose.Schema({
                userName: String,
                checkCode : String
            });
            var myModel = db.model('checkCode', checkSchema, "checkCode");
            myModel.findOne({userName: phone}, function(err, data){
              if(err) {
                console.log(err);
              }else{
                myModel.remove({userName: phone}, function(err, data){
                  if(err){
                    console.log(err);
                  }else{
                    console.log('====drop checkCode success');
                  }
                })
              }
            })
            myModel.create({userName: phone, checkCode: random}, function(err, data){
                if(err){
                    console.log(err, "-------------insert checkCode error");
                }else{
                    console.log(data, "-------------insert checkCode success");
                }
            })

        }else {
            console.log(error, '======postCheckCode_error')
        };
    })
}
//获取验证码
router.post('/client/checkCode', function(req, res){
    var phone = req.body.phone;
    var random = createCheckCode(10, 6);
    postCheckCode(phone, random);
    res.statusCode = '200';
    res.cookie('checkCode', phone, {maxAge: 24*60*60*1000});
    res.end();
    console.log(random, '===random');
})

module.exports = router;
