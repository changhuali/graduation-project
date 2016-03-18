import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={

        }
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
                    <ul className="header-right">
                        <li>请登录</li>
                        <li>免费注册</li>
                        <li>咨询热线:400-400-888</li>
                        <li>关注微信</li>
                    </ul>
                </div>
            </div>
        )
    }
}
