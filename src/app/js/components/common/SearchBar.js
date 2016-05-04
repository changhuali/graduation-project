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
            selected: "请选择",
            showOption: false,
        }
    }

    resetState(){
        this.setState({
            keyword: "",
            showOption: false,
        })
    }

    selected(value) {
        var dict = {
            '家装案列': '/familyCase',
            '效果图': '/onlineDemo',
            '资讯': '/imformation',
        };
        this.setState({
            selected: value,
            showOption: false,
        });
        var pathname = dict[value];
        document.getElementById('searchBar').focus();
        this.context.router.push({pathname: pathname, query:{keyword: this.state.keyword}});
    }

    changeKeyword(e) {
        this.setState({
            keyword: e.target.value,
        })
    }

    createOption() {
        var arr = ['家装案列', '效果图', '资讯'];
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
        };
        e.preventDefault();
        if(this.state.selected == '请选择') {
            message.warn('请选择您要搜索的类型');
        }else{
            var handle = {
                '家装案列': this.props.familyCaseBoundAc.getFamilyCaseList,
                '效果图': this.props.onlineDemoBoundAc.getOnlineDemoList,
                '资讯': this.props.imformationBoundAc.getImformationList,
            };
            handle[this.state.selected]({keyword: this.state.keyword});
        }
        var pathname = dict[this.state.selected];
        this.context.router.push({pathname: pathname, query:{keyword: this.state.keyword}});
    }

    jugeRoute(pathname) {
        var dict = ['/familyCase', '/onlineDemo', '/imformation'];
        var tag = dict.some((key) => {
            var patt = new RegExp("^"+key);
            return patt.test(pathname);
        })
        return tag;
    }

    componentWillReceiveProps(nextProps) {
        var dict = {
            'familyCase': '家装案列',
            'onlineDemo': '效果图',
            'imformation': '资讯',
        };
        if(this.jugeRoute(nextProps.location.pathname)) {
            this.setState({
                selected: dict[nextProps.location.pathname.split('/')[1]],
            })
        }
        if(!this.jugeRoute(nextProps.location.pathname)) {
            this.setState({
                selected: '请选择',
            })
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
                        <input id="searchBar" type="text" className="searchBar-input" onChange={this.changeKeyword.bind(this)} value={this.state.keyword} placeholder="请输入关键字" />
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
