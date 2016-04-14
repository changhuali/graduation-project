import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            showUserSet: false,
        }
    }

    logout() {
        this.props.userBoundAc.logout();
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className="header-wrap">
                <div className="header clearfix">
                    <div className="header-left">
                        <i className="fa fa-map-marker color_theme"></i>
                        <span className="header-left-location">重庆</span>
                        <a className="header-left-tog" href="javascript:;">[切换城市]</a>
                    </div>
                    {this.props.user.info.id ?
                        <UserSetting {...this.props} logout={this.logout.bind(this)} />
                    :
                        <ul className="header-right">
                            <li><Link style={{color: "#999999"}} to={{pathname: "login"}}>请登录</Link></li>
                            <li><Link style={{color: "#999999"}} to={{pathname: "regist"}}>免费注册</Link></li>
                            <li>咨询热线:400-400-888</li>
                            <li>关注微信</li>
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

class UserSetting extends Component{
    constructor(props){
        super(props);
        this.state={
            showUserSet: false,
        }
    }

    showUserSet() {
        this.setState({
            showUserSet: !this.state.showUserSet,
        })
    }

    logout() {
        this.props.logout();
    }

    componentDidMount() {
        var node = document.getElementById("header_user");
        var width = node.clientWidth;
        this.setState({
            margin: width/2,
        })
    }

    render(){
        return (
            <ul className="header-right">
                <li>咨询热线:400-400-888</li>
                <li>关注微信</li>
                <li id="header_user" onMouseLeave={this.showUserSet.bind(this)} onMouseEnter={this.showUserSet.bind(this)} className="header-user">
                    <a  className="color_theme" href="javascript:;"><i className="fa fa-user"></i>&nbsp;&nbsp;{this.props.user.info.userName}</a>
                    {this.state.showUserSet ?
                    <ul style={{marginLeft: this.state.margin}} className="header-user-ul">
                        <span className="header-user-arrow"></span>
                        <li><a className="color_theme" href="/">个人设置</a></li>
                        <li><a className="color_theme" onClick={this.logout.bind(this)} href="javascript:;">退出</a></li>
                    </ul>
                    : ""}
                </li>
            </ul>
        )
    }
}
