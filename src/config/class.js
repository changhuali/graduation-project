
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
        return rexExp.test(value);
    }
}

module.exports = { __FORMCHECK__ };
