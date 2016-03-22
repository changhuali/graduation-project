import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            showUserSet: false,
        }
    }

    componentDidMount() {

    }

    logout() {
        this.props.userBoundAc.logout();
    }

    showUserSet() {
        this.setState({
            showUserSet: !this.state.showUserSet,
        })
    }

    render() {
        return(
            <div className="header-wrap">
                <div className="header clearfix">
                    <div className="header-left">
                        <i className="fa fa-map-marker"></i>
                        <span className="header-left-location">重庆</span>
                        <span className="header-left-tog">[切换城市]</span>
                    </div>
                    {this.props.user.info.id ?
                        <ul className="header-right">
                            <li>咨询热线:400-400-888</li>
                            <li>关注微信</li>
                            <li onClick={this.showUserSet.bind(this)} className="header-user">
                                <a href="javascript:;"><i className="fa fa-user"></i>&nbsp;&nbsp;{this.props.user.info.userName}</a>
                                {this.state.showUserSet ?
                                <ul className="header-user-ul">
                                    <li><a href="/">个人设置</a></li>
                                    <li><a onClick={this.logout.bind(this)} href="javascript:;">退出</a></li>
                                </ul>
                                : ""}
                            </li>
                        </ul>
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
