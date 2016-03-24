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
        dataArr.map((obj, idx) => {
            var itemStyle = "nav-item";
            if(idx == this.state.active){
                itemStyle = "nav-item nav-item-active";
            }
            list.push(<div key={obj.key+obj.idx} onClick={this.changeItem.bind(this, idx)} className={itemStyle}><Link className="color_theme" to={{pathname: obj.src}}>{obj.key}</Link></div>)
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

const dataArr = [{"key": "首页","src": "/"},
                {"key": "关于国风","src": "/"},
                {"key": "家装产品","src": "/"},
                {"key": "咨询中心","src": "/"},
                {"key": "优惠活动","src": "/"},
                {"key": "在线样板房","src": "/"},
                {"key": "装修预算","src": "/"}];
