import React, { Component } from 'react';
import { Link } from 'react-router';
import Login from './User/Login';
import Regist from './User/Regist';
import img_left from '../../../images/login_left.jpg';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state={
            tabActive: "login",
        }
    }

    changeTab(e) {
        this.setState({
            tabActive: e.target.id,
        });
    }

    createItem() {
        var obj = {
            login: <Login {...this.props} />,
            regist: <Regist {...this.props} />
        };
        return obj[this.state.tabActive];
    }

    componentDidMount() {
        this.props.hideNav(true);
    }

    componentWillUnmount() {
        this.props.hideNav(false);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.location.pathname == '/regist') {
            this.setState({
                tabActive: 'regist',
            });
        }else{
            this.setState({
                tabActive: 'regist',
            });
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
                            <Link to={{pathname: "login"}}><span id="login" className={login} onClick={this.changeTab.bind(this)}>账号登录</span></Link>
                            <Link to={{pathname: "regist"}}><span id="regist" className={regist} onClick={this.changeTab.bind(this)}>账号注册</span></Link>
                        </div>
                        {this.createItem()}
                    </div>
                </div>
            </div>
        )
    }
}
