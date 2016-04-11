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
            list.push(<Link to={obj.src}>
                        <div key={obj.key+obj.idx} onClick={this.changeItem.bind(this, idx)} className={itemStyle}>
                          {obj.key}
                        </div>
                      </Link>)
        })
        return <div className="nav">{list}</div>
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
    {"key": "家装案例","src": "/"},
    {"key": "在线样板房","src": "/"},
    {"key": "装修预算","src": "/"},
    {"key": "资讯中心","src": "/"},
    {"key": "优惠活动","src": "/"},
    {"key": "关于国风","src": "/"},
    {"key": "联系我们","src": "/"},
];
