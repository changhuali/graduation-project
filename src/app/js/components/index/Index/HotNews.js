import React, { Component } from 'react';
import {routerShape} from 'react-router';

import Loading from '../../common/Loading';
import NotFound from '../../common/NotFound';

import news_ad from '../../../../images/news_ad.jpg';
import news_ad2 from '../../../../images/news_ad2.jpg';

export default class HotNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    viewDetail(data) {
        localStorage.setItem('imformation', JSON.stringify(data));
        this.props.imformationBoundAc.addViewNum(data._id);
        this.context.router.push({pathname: '/imformation/'+data._id});
    }

    createCenterItem() {
        var list = [];
        var data = this.state.data.otherHot.slice(0, 4);
        data.map((obj, idx) => {
            list.push(
                <li key={idx} className="index-hotNews-centerItem">
                    <a href="javascript:;" onClick={this.viewDetail.bind(this, obj)}>{obj.title}</a>
                    <p>{obj.desc.substr(0, 50)+'...'}</p>
                </li>
            )
        })
        return list;
    }

    componentDidMount() {
        this.props.imformationBoundAc.getImformationList();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.imformation.list.data != undefined) {
            this.setState({
                data: nextProps.imformation.list.data,
            })
        }
    }

    render() {
        return (
            <div className="index-hotNews clearfix">
                <div className="index-hotNews-left">

                </div>
                {this.state.data.otherHot == undefined
                    ?
                    <Loading />
                    :
                this.state.data.otherHot.length == 0
                    ?
                    <NotFound />
                    :
                    <ul className="index-hotNews-center">
                        {this.createCenterItem()}
                    </ul>
                }
                <div className="index-hotNews-right">
                  <img className="img_full" src={news_ad} />
                </div>
            </div>
        )
    }
}
HotNews.contextTypes = {
    router: routerShape.isRequired,
}
