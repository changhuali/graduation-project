import React, { Component } from 'react';
import { notification } from 'antd';
import { __FORMCHECK__ } from '../../../../../../config/class';

export default class ChangePhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeObj: {
                befPhone: "",
                newPhone: "",
                checkCode: "",
            },
            changeTag: {
                befPhone: "",
                newPhone: "",
                checkCode: "",
            },
            checking: 61,
            changing: false,
            message: ""
        }
    }

    setChangeObj(e) {
        var newObj = Object.assign({}, this.state.changeObj, {[e.target.name]: e.target.value});
        this.setState({
            changeObj: newObj,
        })
    }

    checkFormat(e) {
        var message = "";
        switch(e.target.name) {
            case "befPwd":
                message = __FORMCHECK__.checkPwd(e.target.value);
                break;
            case "newPwd":
                message = __FORMCHECK__.checkPwd(e.target.value);
                break;
            case "rePwd":
                message = __FORMCHECK__.checkRePwd(this.state.changeObj.rePwd, this.state.changeObj.userPwd);
                break;
        }
        console.log(message, '====');
        if(message.length != 0){
            this.setState({
                message: message,
                changeTag: Object.assign(this.state.changeTag, {[e.target.name]: false}),
            })
        }else{
            this.setState({
                changeTag: Object.assign(this.state.changeTag, {[e.target.name]: true}),
            })
        }
    }

    getCheckCode() {
        var phone = this.state.changeObj.phone;
        if(phone != ''){
            this.props.userBoundAc.getCheckCode(phone);
            this.setState({
                checking: 60,
            });
            this.changeChecking();
        }else{
            notification.warn({
                description: '请输入手机号码',
            })
        }
    }

    changeChecking() {
        var time = this.state.checking;
        if(time > 0) {
            setTimeout(
                () => {
                    this.setState({
                        checking: time-1,
                    });
                    this.changeChecking();
                }, 1000
            );
        }else if(time == 0) {
            this.setState({
                checking: 61,
            });
        }
    }

    change(e) {
        e.preventDefault();
        var obj = this.state.changeTag;
        var tag = Object.keys(obj).every(key => {
            return obj[key] != false;
        })
        if(tag){
            this.setState({
                registing: true,
            })
            this.props.userBoundAc.regist(this.state.changeObj);
        }else if(this.state.message == ""){
            notification.error({
                description: "请完善用户信息",
            })
        }else{
            notification.error({
                description: this.state.message,
                duration: 3,
            });
        }
    }

    render() {
        var formObj = this.state.changeObj;
        return (
            <div>
                <input className="user-right-user"
                    type='text'
                    name="phone"
                    onChange={this.setChangeObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.phone}
                    autoComplete="off"
                    placeholder="原手机号" />
                <input className="user-right-user"
                    type='text'
                    name="phone"
                    onChange={this.setChangeObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.phone}
                    autoComplete="off"
                    placeholder="新手机号" />
                <input className="user-right-checkCode"
                    type='text'
                    name="checkCode"
                    onChange={this.setChangeObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.checkCode}
                    autoComplete="off"
                    placeholder="验证码" />
                <button onClick={this.getCheckCode.bind(this)} className="user-right-sub user-checkCode">
                    {this.state.checking == 61 ? '获取验证码' : this.state.checking + ' s后重新获取'}
                </button>
                <button className="user-right-sub"
                    onClick={this.change.bind(this)}
                    disabled={this.state.changing ? "disabled" : ""}>
                    {this.state.changing ? "修改中" : "立即修改"}
                </button>
            </div>
        )
    }
}
