import React, { Component } from 'react';
import { Link } from 'react-router';
import { __FORMCHECK__ } from '../../../../../config/class';
import { notification } from 'antd';
import __has from 'lodash/has';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            logining: false,
            loginObj: {
                phone: "",
                userPwd: "",
            },
        }
    }

    setLoginParams(e) {
        var newObj = Object.assign({}, this.state.loginObj, {[e.target.name]: e.target.value});
        this.setState({
            loginObj: newObj,
        })
    }

    enterLogin(e) {
        if(e.keyCode == 13){
            this.login(e);
        }
    }

    login(e) {
        e.preventDefault();
        var phone = this.state.loginObj.phone;
        var pwd      = this.state.loginObj.userPwd;
        if(!__FORMCHECK__.isEmpty(phone) && !__FORMCHECK__.isEmpty(pwd)){
            this.setState({
                logining: true,
            })
            this.props.userBoundAc.login(this.state.loginObj);
        }else{
            notification.error({
                description: "用户名或密码不能为空",
                duration: 2,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.info.id != undefined) {
            window.location.href = "/";
        }else if(__has(nextProps.user.info, "errorCode")){
            notification.error({
                description: nextProps.user.info.message,
                duration: 3,
            });
            this.setState({
                logining: false,
            })
            this.props.userBoundAc.resetInfo();
        }
    }

    render() {
        return(
            <div className="user-right-loginForm">
                <input className="user-right-user"
                    type='text'
                    name="phone"
                    onChange={this.setLoginParams.bind(this)}
                    value={this.state.loginObj.phone}
                    placeholder="手机号"
                    autocomplete="off" />
                <input className="user-right-pwd"
                    type='password'
                    name="userPwd"
                    onKeyUp={this.enterLogin.bind(this)}
                    onChange={this.setLoginParams.bind(this)}
                    value={this.state.loginObj.userPwd}
                    placeholder="密码"
                    autocomplete="off" />
                <p className="user-right-autoLogin clearfix">
                    <input className="user-remenberPwd" type="checkBox" name="autoLogin" />&nbsp;&nbsp;记住密码
                    <a className="user-right-forgetPwd" href="#">忘记密码?</a>
                </p>
                <button onClick={this.login.bind(this)}
                    className="user-right-sub"
                    disabled={this.state.logining? "disabled" : ""}>{this.state.logining? "登录中" : "立即登录"}</button>
                <div className="user-right-regist">
                    没有账号?<Link className="right" to={{pathname: "regist"}}>立即注册</Link>
                </div>
            </div>
        )
    }
}
