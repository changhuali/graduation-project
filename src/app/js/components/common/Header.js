import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            showUserSet: false,
            location: '北京',
        }
    }

    logout() {
        this.props.userBoundAc.logout();
    }

    componentDidMount() {
        var myFun = (result) => {
      		var cityName = result.name;
          this.setState({
            location: cityName,
          });
      	}
      	var myCity = new BMap.LocalCity();
      	myCity.get(myFun);
    }

    render() {
        return(
            <div className="header-wrap">
                <div className="header clearfix">
                    <div className="header-left">
                        <i className="fa fa-map-marker color_theme"></i>
                        <span className="header-left-location">当前城市</span>
                        <span className="header-left-tog">{'['+this.state.location+']'}</span>
                    </div>
                    {this.props.user.info.id ?
                        <UserSetting {...this.props} logout={this.logout.bind(this)} />
                    :
                        <ul className="header-right">
                            <li><Link style={{color: "#999999"}} to={{pathname: "login"}}>请登录</Link></li>
                            <li><Link style={{color: "#999999"}} to={{pathname: "regist"}}>免费注册</Link></li>
                            <li>咨询热线:400-400-888</li>
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

    hideUserSet() {
        this.setState({
            showUserSet: false,
        });
    }

    logout() {
        this.props.logout();
        this.hideUserSet();
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
                <li id="header_user" onMouseLeave={this.showUserSet.bind(this)} onMouseEnter={this.showUserSet.bind(this)} className="header-user">
                    <a  className="color_theme" href="javascript:;"><i className="fa fa-user"></i>&nbsp;&nbsp;{this.props.user.info.userName}</a>
                    {this.state.showUserSet ?
                    <ul style={{marginLeft: this.state.margin}} className="header-user-ul">
                        <span className="header-user-arrow"></span>
                        <Link to={{pathname: "user"}}><li onClick={this.hideUserSet.bind(this)} className="color_theme">个人设置</li></Link>
                        <a className="color_theme" onClick={this.logout.bind(this)} href="javascript:;"><li>退出</li></a>
                    </ul>
                    : ""}
                </li>
            </ul>
        )
    }
}
