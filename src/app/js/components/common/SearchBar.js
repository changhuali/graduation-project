import React , {Component} from 'react';
import {routerShape} from 'react-router';
import search_logo from '../../../images/search_login.jpg';
import search_right from '../../../images/search_right.jpg';

import {message} from 'antd';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword: "",
            selected: "效果图",
            showOption: false,
        }
    }

    resetState(){
        this.setState({
            keyword: "",
            selected: "效果图",
            showOption: false,
        })
    }

    selected(value) {
        this.setState({
            selected: value,
            showOption: false,
        });
    }

    changeKeyword(e) {
        this.setState({
            keyword: e.target.value,
        })
    }

    createOption() {
        var arr = ['家装案列', '效果图', '资讯', '优惠活动'];
        var list = [];
        arr.map((key, idx) => {
            if(key != this.state.selected) {
                list.push(
                    <div key={'option'+idx} className="searchBar-option pl10" onClick={this.selected.bind(this, key)}>
                        {key}
                    </div>
                );
            }
        });
        return list;
    }

    showOption(value) {
        this.setState({
            showOption: value,
        })
    }

    search(e) {
        var dict = {
            '家装案列': '/familyCase',
            '效果图': '/onlineDemo',
            '资讯': '/imformation',
            '优惠活动': '/promotion',
        };
        e.preventDefault();
        if(this.state.keyword == "") {
            message.warn('关键字不能为空噢!')
        }else{
            var pathname = dict[this.state.selected];
            this.resetState();
            this.context.router.push({pathname: pathname, query: {keyword: this.state.keyword}});
        }
    }

    render() {
        var arrow = this.state.showOption?'up':'down';
        return(
            <div className="searchBar-wrap">
                <div className="searchBar clearfix">
                    <div className="searchBar-img">

                    </div>
                    <div className="searchBar-from">
                        <div className="searchBar-select" onMouseOver={this.showOption.bind(this,true)} onMouseLeave={this.showOption.bind(this, false)}>
                            <div className="searchBar-select-value pl10">{this.state.selected}</div>
                            {this.state.showOption ?
                                <div className="searchBar-optionBox">{this.createOption()}</div>
                            : ""}
                            <i className={"fa searchBar-icon fa-caret-"+arrow}></i>
                        </div>
                        <input type="text" className="searchBar-input" onChange={this.changeKeyword.bind(this)} value={this.state.keyword} placeholder="请输入关键字" />
                        <input type="submit" onClick={this.search.bind(this)} className="searchBar-btn" value="搜索" />
                    </div>
                    <div className="searchBar-ad">

                    </div>
                </div>
            </div>
        )
    }
}

SearchBar.contextTypes = {
    router: routerShape.isRequired,
}
