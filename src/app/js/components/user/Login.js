import React, { Component } from 'react';
import { Link } from 'react-router';

import img_left from '../../../images/login_left.jpg';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            tabActive: "login",
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

    login(e) {
        this.props.userBoundAc.login();
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.tabActive) {
            this.setState({
                tabActive: this.props.tabActive,
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
                        <img src={img_left} alt="" />
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
                            <input className="login-content-right-user" type='text' value={this.state.userName} placeholder="手机号/邮箱" />
                            <input className="login-content-right-pwd" type='password' value={this.state.userPwd} placeholder="密码" />
                            <p className="login-content-right-autoLogin clearfix">
                                <input className="login-remenberPwd" type="checkBox" name="autoLogin" />&nbsp;&nbsp;记住密码
                                <a className="login-content-right-forgetPwd" href="#">忘记密码?</a>
                            </p>
                            <button onClick={this.login.bind(this)} className="login-content-right-sub">立即登录</button>
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
