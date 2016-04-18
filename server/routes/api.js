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
        phone: String,
        userPwd : String
    });
    var myModel = db.model('user', userSchema, "user");
    myModel.findOne({phone: req.body.phone},function(err, data){
        console.log(data, "===========================================================================login data");
        if(err){
            console.log(err);
            callback(500);
        }else{
            if(data == null){
                callback(401004);
            }else if(req.body.userPwd == data.userPwd){
                callback(200, {id: data._id , userName: data.userName});
            }else{
                callback(401003);
            }
        }
    })
}

//用户登录
router.post('/client/login', function(req, res){
    checkLogin(req, function(status, data) {
        if(status == 200) {
            res.statusCode = 200;
            res.cookie('info', data, {path: '/', maxAge: 30*60*1000});
            console.log(data, '===');
            res.send(data);
        }else if(status == 401003) {
            res.statusCode = 401;
            res.send({
                errorCode: 401,
                message: '密码错误',
            });
        }else if(status == 401004) {
            res.statusCode = 401;
            res.send({
                errorCode: 401,
                message: '该用户不存在',
            });
        }else if(status == 500) {
            res.statusCode == 500;
            res.send({
                errorCode: 500,
                message: '服务器内部错误',
            });
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
//用户注册数据库操作
var checkRegist = function(req, callback) {
    var userSchema = new mongoose.Schema({
        userName: String,
        phone: String,
        userPwd : String
    });
    var checkCodeSchema = new mongoose.Schema({
        phone: String,
        checkCode : String
    });
    var userModel = db.model('user', userSchema, "user");
    var checkModel = db.model('checkCode', checkCodeSchema, "checkCode");
    if(req.cookies.checkCode) {
        var userName = req.body.userName;
        var phoneNum = req.body.phone;
        var checkCode= req.body.checkCode;
        checkModel.findOne({phone: phoneNum}, function(err, data){
            console.log(data, "=========================================================checkCode in dataBase");
            if(err){
                console.log(err);
                callback(500);
            }else if(data == null){
                callback(401001, '验证码错误');
            }else if(checkCode == data.checkCode) {
                //验证手机是否已经注册
                userModel.find({phone: phoneNum}, function(err, data){
                    console.log(data, "=========================================================phone registed?");
                    if(err){
                        console.log(err);
                        callback(500);
                    }else if(data instanceof Array && data.length > 0){
                        console.log('该手机已经注册');
                        callback(401002, '该手机已经注册,请用其它手机号码');
                    }else{
                        //保存用户信息到数据库
                        userModel.create({userName: userName, phone: phoneNum, userPwd: req.body.userPwd}, function(err, data){
                            console.log(data, "=========================================================regist data");
                            if(err){
                                console.log(err, "-------------regist insert error");
                                callback(500);
                            }else{
                                console.log(err, "-------------regist insert success");
                                callback(200, {id: data._id, phone: data.phone});
                            }
                        });
                    }
                });
            }else{
                callback(401001, '验证码错误');
            }
        });
    }else{
        callback(401001, '验证码错误');
    }
}

//用户注册返回结果
router.post('/client/regist', function(req, res){
    checkRegist(req, function(status, data){
        if(status == 200) {
            res.statusCode = 200;
            res.send(data);
        }else if(status == 401001) {
            res.statusCode = 401,
            res.send({
                errorCode: 401001,
                message: data,
            });
        }else if(status == 401002){
            res.statusCode = 401;
            res.send({
                errorCode: 401002,
                message: data,
            });
        }else if(status == 500) {
            res.statusCode = 500;
            res.send({
                errorCode: 500,
                message: '服务器内部错误',
            });
        }
    });
})

//生成验证码
function createCheckCode(len) {
    var str = '';
    for(var i = 1; i <= len; i++) {
        str = str + Math.round(10*Math.random());
    }
    console.log(len, str, "================================================================================================createCheckCode()");
    return str;
}
//保存验证码到数据库
function saveCheckCode(phoneNum, random, callback) {
    var checkCodeSchema = new mongoose.Schema({
        phone: String,
        checkCode : String
    });
    var myModel = db.model('checkCode', checkCodeSchema, "checkCode");
    //查找数据库是否有重复验证码
    myModel.findOne({phone: phoneNum}, function(err, data){
        if(err) {
            callback(500);
            console.log(err);
        }else{
            myModel.remove({phone: phoneNum}, function(err, data){
                if(err){
                    callback(500);
                    console.log(err);
                }else{
                    console.log(data, '================================================================================================saveCheckCode()');
                    myModel.create({phone: phoneNum, checkCode: random}, function(err, data){
                        if(err){
                            callback(500);
                            console.log(err, "-------------insert checkCode error");
                        }else{
                            callback(200);
                            console.log(data, "-------------insert checkCode success");
                        }
                    })
                }
            })
        }
    });
}
//发送并保存验证码
function postCheckCode(phoneNum, random, callback) {
    alidayu.execute('alibaba.aliqin.fc.sms.num.send', {
        'extend':'123456',
        'sms_type':'normal',
        'sms_free_sign_name':'大鱼测试',
        'sms_param': {"code":random,"product":"国风装修"},
        'rec_num': phoneNum,
        'sms_template_code':'SMS_7760522'
    }, function(error, response) {
        if (!error) {
            console.log(response, "================================================================================================postCheckCode()");
            saveCheckCode(phoneNum, random, callback);
        }else {
            callback(500);
            console.log(error, '======postCheckCode_error')
        };
    })
}
//获取验证码
router.post('/client/checkCode', function(req, res){
    var phoneNum = req.body.phone;
    var random = createCheckCode(4);
    postCheckCode(phoneNum, random, function(status){
        if(status == 200) {
            res.statusCode = 200;
            res.cookie('checkCode', phoneNum, {maxAge: 24*60*60*1000});
            res.end();
        }else if(status == 500) {
            res.statusCode = 500;
            res.send({
                errorCode: 500,
                message: '服务器内部错误',
            });
        }
    });
})
//查询用户信息
function checkUserInfo(req, callback){
    var pwd = req.body.userPwd;
    var id  = req.cookies.info.id;
    var userSchema = new mongoose.Schema({
        userName: String,
        phone: String,
        userPwd : String
    });
    var myModel = db.model('user', userSchema, "user");
    myModel.findOne({_id: id}, function(err, data) {
        if(err) {
            console.log(err);
            callback(500);
        }else{
            console.log(data, '=====================================================checkPwd');
            if(data == null || (data instanceof Array && data.length == 0)) {
                callback(404);
            }else if(data.userPwd == pwd){
                callback(200);
            }else{
                callback(404);
            }
        }
    });
}

//验证个人设置用户原密码是否正确
router.post('/client/checkPwd', function(req, res){
    checkUserInfo(req, function(status) {
        if(status == 200) {
            res.statusCode = 200;
            res.send({
                id: req.cookies.info.id,
            });
        }else if(status == 404){
            res.statusCode = 404;
            res.send({
                errorCode: 404,
                message: '原密码错误',
            })
        }else if(status == 500) {
            res.statusCode = 500;
            res.send({
                errorCode: 500,
                message: '服务器内部错误',
            });
        }
    });
})

module.exports = router;
