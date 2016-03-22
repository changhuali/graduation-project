import React, { Component } from 'react';
import { Link } from 'react-router';
import { __FORMCHECK__ } from '../../../../config/class';
import { notification } from 'antd';
import __ from 'lodash';
import img_left from '../../../images/login_left.jpg';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            tabActive: "login",
            logining: false,
            registing: false,
            loginObj: {
                userName: "",
                userPwd: "",
            },
            registObj: {
                userName: "",
                userPwd: "",
                userRePwd: "",
                checkCode: "",
            },
            message: "",
            registTag: {
                userName: false,
                userPwd: false,
                userRePwd: false,
                checkCode: false,
            },
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
        console.log(message, "---------------blur")
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
        }else{
            notification.error({
                description: "请检查您输入的信息是否有误!",
                duration: 3,
            });
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
        console.log(nextProps, "---")
        if(nextProps.user.info.id != undefined) {
            window.location.href = "/";
        }else if(__.has(nextProps.user.info, "errorCode")){
            notification.error({
                description: nextProps.user.info.message,
                duration: 3,
            });
            this.setState({
                logining: false,
            })
            this.props.userBoundAc.resetInfo();
        }
        if(nextProps.user.registInfo.id != undefined) {
            location.href="/login";
        }else if(__.has(nextProps.user.registInfo, "errorCode")) {
            notification.error({
                description: nextProps.user.registInfo.message,
                duration: 3,
            });
            this.setState({
                registing: false,
            });
            this.props.userBoundAc.resetRegistInfo();
        }
    }

    render() {
        console.log(this.state.registTag)
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
                            <input className="login-content-right-user"
                                type='text'
                                name="userName"
                                onChange={this.setRegistObj.bind(this)}
                                onBlur={this.checkFormat.bind(this)}
                                value={this.state.userName}
                                placeholder="手机号/邮箱" />
                            <input className="login-content-right-pwd"
                                type='password'
                                name="userPwd"
                                onChange={this.setRegistObj.bind(this)}
                                onBlur={this.checkFormat.bind(this)}
                                value={this.state.userPwd}
                                placeholder="密码" />
                            <input className="login-content-right-pwd"
                                type='password'
                                name="userRePwd"
                                onChange={this.setRegistObj.bind(this)}
                                onBlur={this.checkFormat.bind(this)}
                                value={this.state.userPwd}
                                placeholder="确认密码" />
                            <input className="lgoin-content-right-checkCode"
                                type='text'
                                name="checkCode"
                                onChange={this.setRegistObj.bind(this)}
                                onBlur={this.checkFormat.bind(this)}
                                value={this.state.userPwd}
                                placeholder="验证码" />
                            <button className="login-content-right-sub login-checkCode">发送验证码</button>
                            <p className="login-content-right-autoLogin clearfix">
                                <input className="login-remenberPwd"
                                    type="checkBox"
                                    name="agreement" />&nbsp;&nbsp;我已阅读并同意<Link to={{pathname: "/"}}>《土巴兔用户服务协议》</Link>
                            </p>
                            <button className="login-content-right-sub"
                                onClick={this.regist.bind(this)}
                                disabled={this.state.registing ? "disabled" : ""}>{this.state.registing ? "注册中" : "立即注册"}</button>
                        </div>
                        :
                        <div className="login-content-right-count">
                            <input className="login-content-right-user"
                                type='text'
                                name="userName"
                                onChange={this.setLoginParams.bind(this)}
                                value={this.state.loginObj.userName}
                                placeholder="手机号/邮箱"
                                autoComplete="off" />
                            <input className="login-content-right-pwd"
                                type='password'
                                name="userPwd"
                                onKeyUp={this.enterLogin.bind(this)}
                                onChange={this.setLoginParams.bind(this)}
                                value={this.state.loginObj.userPwd}
                                placeholder="密码"
                                autoComplete="off" />
                            <p className="login-content-right-autoLogin clearfix">
                                <input className="login-remenberPwd" type="checkBox" name="autoLogin" />&nbsp;&nbsp;记住密码
                                <a className="login-content-right-forgetPwd" href="#">忘记密码?</a>
                            </p>
                            <button onClick={this.login.bind(this)}
                                className="login-content-right-sub"
                                disabled={this.state.logining? "disabled" : ""}>{this.state.logining? "登录中" : "立即登录"}</button>
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
