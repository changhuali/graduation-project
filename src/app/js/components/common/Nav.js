import React , { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            active: 0,
        }
    }

    changeItem(idx) {
        this.setState({
            active: idx,
        })
    }

    createNav() {
        var list = [];
            DATA.map((obj, idx) => {
            var itemStyle = "nav-item color_theme";
            if(idx == this.state.active){
                itemStyle = "nav-item nav-item-active";
            }
            list.push(<Link key={obj.key+obj.idx} to={obj.src}>
                        <div onClick={this.changeItem.bind(this, idx)} className={itemStyle}>
                          {obj.key}
                        </div>
                      </Link>)
        })
        return <div className="nav">{list}</div>
    }

    getActiveIndex(pathname) {
      var arr = ['/', '/familyPro', '/familyCase', '/onlineDemo', '/budget', '/imformation', '/promotion', '/about', '/contact'];
      var active = 0;
      arr.map((str, idx) => {
        if(str == pathname || str+'/' == pathname) {
          active = idx;
        }
      });
      return active;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.location.pathname != "/") {
            this.setState({
                active: this.getActiveIndex(nextProps.location.pathname),
            });
        }
    }

    render() {
        return (
            <div className="nav-wrap">
                {this.createNav()}
            </div>
        )
    }
}

    const DATA = [
    {"key": "首页","src": "/"},
    {"key": "家装产品","src": "/familyPro"},
    {"key": "家装案例","src": "/familyCase"},
    {"key": "在线样板房","src": "/onlineDemo"},
    {"key": "装修预算","src": "/budget"},
    {"key": "资讯中心","src": "/imformation"},
    {"key": "优惠活动","src": "/promotion"},
    {"key": "关于国风","src": "/about"},
    {"key": "联系我们","src": "/contact"},
];
