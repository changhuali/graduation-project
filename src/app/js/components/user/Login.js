import React, { Component } from 'react';
import { Link } from 'react-router';
import { __FORMCHECK__ } from '../../../../config/class';
import { notification } from 'antd';

import img_left from '../../../images/login_left.jpg';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            tabActive: "login",
            loginObj: {
                userName: "",
                userPwd: "",
            },
            logining: false,
        }
    }

    changeTab(value) {
        if(value == 1){
            this.setState({
                tabActive: "login",
            })
        }else{
            this.setState({
                tabActive: "regist",
            })
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
            console.log("enter")
        }
    }

    login(e) {
        e.preventDefault();
        var userName = this.state.loginObj.userName;
        var pwd      = this.state.loginObj.userPwd;
        if(!__FORMCHECK__.isEmpty(userName) && !__FORMCHECK__.isEmpty(pwd)){
            this.setState({
                logining: true,
            })
            this.props.userBoundAc.login(this.state.loginObj);
        }else{
            notification.error({
                description: "用户或密码不能为空",
                duration: 2,
            })
        }
    }

    componentDidMount() {
        if(this.props.tabActive) {
            this.setState({
                tabActive: this.props.tabActive,
            })
        }
        this.props.hideNav(true);
    }

    componentWillUnmount() {
        this.props.hideNav(false);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if(this.state.logining) {
            if(nextProps.user.info.id != undefined) {
                window.location.href = "/";
            }else{
                notification.error({
                    description: nextProps.user.info.message,
                    duration: 3,
                })
            }
            this.setState({
                logining: false,
            })
        }
    }

    render() {
        var login = this.state.tabActive == "login" ? "color_999 active" : "color_999";
        var regist= this.state.tabActive == "regist"? "color_999 active" : "color_999";
        return(
            <div className="login-wrap">
                <div className="login-header">
                    <a href="#"><img src="" alt="" /></a>
                    <h2>欢迎登录</h2>
                </div>
                <div className="login-content clearfix">
                    <div className="login-content-left">
                        <Link to={{pathname: '/'}}><img src={img_left} alt="" /></Link>
                    </div>
                    <div className="login-content-right">
                        <div className="login-content-right-tab">
                            <Link to={{pathname: "login"}}><span className={login} onClick={this.changeTab.bind(this, 1)}>账号登录</span></Link>
                            <Link to={{pathname: "regist"}}><span className={regist} onClick={this.changeTab.bind(this, 2)}>账号注册</span></Link>
                        </div>
                        {this.state.tabActive == "regist" ?
                        <div className="login-content-right-regist">
                            <input className="login-content-right-user" type='text' value={this.state.userName} placeholder="手机号/邮箱" />
                            <input className="login-content-right-pwd" type='password' value={this.state.userPwd} placeholder="密码" />
                            <input className="login-content-right-pwd" type='password' value={this.state.userPwd} placeholder="确认密码" />
                            <input className="lgoin-content-right-checkCode" type='text' value={this.state.userPwd} placeholder="验证码" />
                            <button className="login-content-right-sub login-checkCode">发送验证码</button>
                            <p className="login-content-right-autoLogin clearfix">
                                <input className="login-remenberPwd" type="checkBox" name="autoLogin" />&nbsp;&nbsp;我已阅读并同意<Link to={{pathname: "/"}}>《土巴兔用户服务协议》</Link>
                            </p>
                            <button className="login-content-right-sub">立即注册</button>
                        </div>
                        :
                        <div className="login-content-right-count">
                            <input className="login-content-right-user" type='text' name="userName" onChange={this.setLoginParams.bind(this)} value={this.state.loginObj.userName} placeholder="手机号/邮箱" />
                            <input className="login-content-right-pwd" type='password' name="userPwd" onKeyUp={this.enterLogin.bind(this)} onChange={this.setLoginParams.bind(this)} value={this.state.loginObj.userPwd} placeholder="密码" />
                            <p className="login-content-right-autoLogin clearfix">
                                <input className="login-remenberPwd" type="checkBox" name="autoLogin" />&nbsp;&nbsp;记住密码
                                <a className="login-content-right-forgetPwd" href="#">忘记密码?</a>
                            </p>
                            <button onClick={this.login.bind(this)} className="login-content-right-sub" disabled={this.state.logining? "disabled" : ""}>{this.state.logining? "登录中" : "立即登录"}</button>
                            <div className="ligin-content-right-regist">
                                没有账号?<Link className="right" to={{pathname: "regist"}}>立即注册</Link>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}
