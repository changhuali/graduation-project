import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            tabActive: "count",
            autoLogin: false,
        }
    }

    changeTab(value) {
        if(value == 1){
            this.setState({
                tabActive: "count",
            })
        }else{
            this.setState({
                tabActive: "weChat",
            })
        }
    }

    render() {
        var countLogin = this.state.tabActive == "count" ? "active" : "";
        var weChat     = this.state.tabActive == "weChat"? "active" : "";
        return(
            <div className="login-wrap">
                <div className="login-header">
                    <a href="#"><img src="" alt="" /></a>
                    <h2>欢迎登录</h2>
                </div>
                <div className="login-content clearfix">
                    <div className="login-content-left">
                    </div>
                    <div className="login-content-right">
                        <div className="login-content-right-tab">
                            <span className={countLogin} onClick={this.changeTab.bind(this, 1)}>账号登录</span>
                            <span className={weChat} onClick={this.changeTab.bind(this, 2)}>微信登录</span>
                        </div>
                        {this.state.tabActive == "weChat" ?
                        <div>
                            <img src="" alt="" />
                            <p>二维码失效?请刷新二维码</p>
                        </div>
                        :
                        <div className="login-content-right-count">
                            <input className="login-content-right-user" type='text' value={this.state.userName} placeholder="用户名/手机号/邮箱" />
                            <input className="login-content-right-pwd" type='password' value={this.state.userPwd} placeholder="密码" />
                            <p className="login-content-right-autoLogin clearfix">
                                <input type="radio" name="autoLogin" value={this.state.aotoLogin} />下次自动登录
                                <a className="login-content-right-forgetPwd" href="#">忘记密码?</a>
                            </p>
                            <button className="login-content-right-sub">立即登录</button>
                            <div className="ligin-content-right-regist">
                                没有账号?<a className="right" href="#">立即注册</a>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}
