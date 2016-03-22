
var __FORMCHECK__ = {
    isEmpty: function(value) {
        if(value == null || value == ""){
            return true;
        }else{
            return false;
        }
    },
    isPhoneNum: function(value) {
        var regExp = /^1[3|4|5|7|8]\d{9}/;
        return regExp.test(value);
    },
    isEmail: function(value) {
        var regExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        return regExp.test(value);
    },
    pwdLessThan(value, min, max){
        if(value.length < min || value.length > max){
            return false;
        }else{
            return true;
        }
    },
    checkUser: function(value) {
        if(this.isEmpty(value)){
            return "不能为空";
        }else if(!this.isPhoneNum(value) && !this.isEmail(value)){
            return "格式错误";
        }else{
            return "";
        }
    },
    checkPwd: function(value) {
        if(this.isEmpty(value)){
            return "不能为空";
        }else if(!this.pwdLessThan(value, 6, 12)){
            return "长度应该为 6-12 位";
        }else{
            return "";
        }
    },
    checkRePwd: function(rePwd, pwd) {
        if(this.isEmpty(rePwd)){
            return "确认密码不能为空"
        }if(pwd !== rePwd){
            return "两次密码输入不一致";
        }else{
            return "";
        }
    },
    checkCode: function(value) {
        if(this.isEmpty(value)){
            return "验证码不能为空";
        }else{
            return "";
        }
    }
}

module.exports = { __FORMCHECK__ };
