import React, { Component } from 'react';
import { Link } from 'react-router';
import Login from './Login';
import { notification } from 'antd';
import __has from 'lodash/has';
import { __FORMCHECK__ } from '../../../../../config/class';

export default class Regist extends Component {
    constructor(props){
        super(props);
        this.state={
            registObj: {
                userName: "",
                phone: "",
                userPwd: "",
                userRePwd: "",
                checkCode: "",
            },
            registTag: {
                userName: false,
                phone: false,
                userPwd: false,
                userRePwd: false,
                checkCode: false,
            },
            checking: 61,
            registing: false,
            message: ""
        }
    }

    resetState() {
        this.setState({
            registObj: {
                userName: "",
                phone: "",
                userPwd: "",
                userRePwd: "",
                checkCode: "",
            },
            registTag: {
                userName: false,
                phone: false,
                userPwd: false,
                userRePwd: false,
                checkCode: false,
            },
            checking: 61,
            registing: false,
            message: ""
        });
    }

    setRegistObj(e) {
        var newObj = Object.assign({}, this.state.registObj, {[e.target.name]: e.target.value});
        this.setState({
            registObj: newObj,
        })
    }

    checkFormat(e) {
        var message = "";
        switch(e.target.name) {
            case "userName":
                message = __FORMCHECK__.checkUser(e.target.value);
                break;
            case "phone":
                message = __FORMCHECK__.checkPhone(e.target.value);
                break;
            case "userPwd":
                message = __FORMCHECK__.checkPwd(e.target.value);
                break;
            case "userRePwd":
                message = __FORMCHECK__.checkRePwd(this.state.registObj.userRePwd, this.state.registObj.userPwd);
                break;
            case "checkCode":
                message = __FORMCHECK__.checkCode(e.target.value);
                break;
        }
        console.log(message, '====');
        if(message.length != 0){
            this.setState({
                message: message,
                registTag: Object.assign(this.state.registTag, {[e.target.name]: false}),
            })
        }else{
            this.setState({
                registTag: Object.assign(this.state.registTag, {[e.target.name]: true}),
            })
        }
    }

    getCheckCode() {
        var phone = this.state.registObj.phone;
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

    regist(e) {
        e.preventDefault();
        var obj = this.state.registTag;
        var tag = Object.keys(obj).every(key => {
            return obj[key] != false;
        })
        if(tag){
            this.setState({
                registing: true,
            })
            this.props.userBoundAc.regist(this.state.registObj);
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.user.registInfo);
        if(nextProps.user.registInfo.id != undefined) {
            this.setState({
                registing: false,
            });
            this.resetState();
        }else if(__has(nextProps.user.registInfo, "errorCode")) {
            this.setState({
                registing: false,
            });
            this.props.userBoundAc.resetRegistInfo();
        }
    }

    render() {
        var formObj = this.state.registObj;
        return(
            <div className="user-right-registForm">
                <input className="user-right-user"
                    type='text'
                    name="userName"
                    onChange={this.setRegistObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.userName}
                    autocomplete="off"
                    placeholder="用户名" />
                <input className="user-right-user"
                    type='text'
                    name="phone"
                    onChange={this.setRegistObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.phone}
                    autocomplete="off"
                    placeholder="手机号" />
                <input className="user-right-pwd"
                    type='password'
                    name="userPwd"
                    onChange={this.setRegistObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.userPwd}
                    autocomplete="off"
                    placeholder="密码" />
                <input className="user-right-pwd"
                    type='password'
                    name="userRePwd"
                    onChange={this.setRegistObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.userRePwd}
                    autocomplete="off"
                    placeholder="确认密码" />
                <input className="user-right-checkCode"
                    type='text'
                    name="checkCode"
                    onChange={this.setRegistObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.checkCode}
                    autocomplete="off"
                    placeholder="验证码" />
                <button onClick={this.getCheckCode.bind(this)} className="user-right-sub user-checkCode">
                    {this.state.checking == 61 ? '获取验证码' : this.state.checking + ' s后重新获取'}
                </button>
                <p className="user-right-autoLogin clearfix">
                    <input className="user-remenberPwd"
                        type="checkBox"
                        name="agreement" />&nbsp;&nbsp;我已阅读并同意<Link to={{pathname: "/"}}>《土巴兔用户服务协议》</Link>
                </p>
                <button className="user-right-sub"
                    onClick={this.regist.bind(this)}
                    disabled={this.state.registing ? "disabled" : ""}>{this.state.registing ? "注册中" : "立即注册"}</button>
            </div>
        )
    }
}