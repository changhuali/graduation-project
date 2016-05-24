import React, { Component } from 'react';
import { Pagination } from 'antd';
import {routerShape} from 'react-router';
import Carousel from '../common/Carousel';

import Loading from '../common/Loading';
import NotFound from '../common/NotFound';

import section_head_1 from '../../../images/imformation/carousel/item_1.jpg';
import section_head_2 from '../../../images/imformation/carousel/item_2.jpg';
import section_head_3 from '../../../images/imformation/carousel/item_3.jpg';
import section_head_4 from '../../../images/imformation/carousel/item_4.jpg';

export default class Imformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 10,
            showIndex: 0,
            rotate: 0,
            data: {},
            showType: '公司新闻',
            indexArr: this.initArr(),
        }
    }

    getCurrData() {
        var data = this.state.data.otherHot;
        return data.slice((this.state.current-1)*this.state.pageSize, this.state.current*this.state.pageSize);
    }

    initArr() {
        var list = [];
        for(var i=0; i<INDUSTRY_DATA.length; i++) {
            list.push(i);
        }
        return list;
    }

    changePage(value) {
        this.setState({
            current: value,
        });
    }

    createItem() {
        var list = [];
        var data = this.getCurrData();
        data.map((obj, idx) => {
            list.push(
                <div key={idx} onClick={this.viewDetail.bind(this, obj)} className="imformation-item clearfix">
                    <div className="information-con">
                        <h3 className="imformation-title"><a href="javascript:;">{obj.title}</a></h3>
                        <p className="imformation-text">{obj.desc}</p>
                        <div className="imformation-other">
                            <span>{'['+obj.type+']'}</span>
                            <span>{obj.time}</span>
                            <span>{'浏览数 '+obj.viewNum}</span>
                        </div>
                    </div>
                </div>
            );
        });
        return list;
    }

    changeIndex(idx) {
        var len = INDUSTRY_DATA.length;
        var showIndex = this.state.showIndex;
        var diff = idx > showIndex ? len - idx + showIndex : idx == showIndex ? 0 : showIndex - idx;
        console.log(diff);
        this.setState({
            showIndex: idx,
            rotate: this.state.rotate+diff*360/len,
        })
    }

    createAxis() {
        var list = [];
        var pos = this.computePos(INDUSTRY_DATA.length);//改为零 动画改回this.state.showIndex
        INDUSTRY_DATA.map((key, idx) => {
            var classStr = this.state.showIndex == idx ? "imformation-axis active" : "imformation-axis";
            list.push(
                <div onClick={this.changeIndex.bind(this, idx)} key={key} style={{left:pos[idx].left, top:pos[idx].top, transform: 'rotate('+-this.state.rotate+'deg)'}} className={classStr}>
                    {key}
                </div>
            )
        })
        return list;
    }

    computePos(num) {
        var countArr = [];
        var posArr = [];
        for(var i=0;i<num;i++) {
            countArr[i]=i;
        }
        var PI  = Math.PI;
        countArr.map((idx) => {
            var obj = {};
            obj.left = Math.cos(idx*PI/180*(360/num)).toFixed(5)*70 + 47;
            obj.top = Math.sin(idx*PI/180*(360/num)).toFixed(5)*70 + 54;
            posArr.push(obj);
        })
        return posArr;
    }

    createNews(data) {
        var list = [];
        data.map((obj, idx) => {
            list.push(
                <div key={idx}>
                    <a onClick={this.viewDetail.bind(this, obj)} className="news-title" href="javascript:;">{'['+obj.title+']'}</a>
                </div>
            );
        });
        return list;
    }

    viewDetail(data) {
        localStorage.setItem('imformation', JSON.stringify(data));
        this.props.imformationBoundAc.addViewNum(data._id);
        this.context.router.push({pathname: '/imformation/'+data._id});
    }

    componentDidMount() {
        var keyword = this.props.location.query.keyword != undefined ? this.props.location.query.keyword : "";
        this.props.imformationBoundAc.getImformationList({keyword: keyword});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.imformation.list.data != undefined) {
            this.setState({
                data: nextProps.imformation.list.data,
            })
        }
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        var imgArr  = [
            {img: section_head_1, desc: "CAN TV高色域电视上市 重点在画质和音质"},
            {img: section_head_2, desc: "首批家居五金团体标准“顺德造” 推动产业升级"},
            {img: section_head_3, desc: "智能家居难以落地 要降低硬件价格打破平台壁垒"},
            {img: section_head_4, desc: "第二届平板电视技术发展趋势论坛将举行"},
        ];
        return (
            <div className="imformation-wrap">
                <div className="imformation clearfix">
                    <div className="imformation-left">
                        <div className="imformation-left-con">
                            <h1 className='imformation-left-tit'>公司新闻</h1>
                            {this.state.data.companyHot == undefined
                            ?
                                <Loading />
                            :
                                this.state.data.companyHot.length == 0
                            ?
                                <NotFound />
                            :

                                <div>
                                    {this.createNews(this.state.data.companyHot)}
                                </div>
                            }
                            </div>
                            <div className="imformation-left-con">
                                <h1 className='imformation-left-tit'>行业新闻</h1>
                                {this.state.data.industryHot == undefined
                                ?
                                    <Loading />
                                :
                                this.state.data.industryHot.length == 0
                                ?
                                    <NotFound />
                                :
                                    <div>
                                        {this.createNews(this.state.data.industryHot)}
                                    </div>
                                }
                            </div>
                        <div className="imformation-left-axis">
                            <div style={{transform: 'rotate('+this.state.rotate+'deg)'}} className="imformation-circle">
                                {this.createAxis()}
                            </div>
                        </div>
                    </div>
                        <div className="imformation-right">
                            <Carousel style={{marginBottom: '40px'}} btnRight {...this.props} imgSource={imgArr} width="898" height="345" timeCycle="5000" />
                            {this.state.data.otherHot == undefined
                                ?
                                <Loading />
                                :
                            this.state.data.otherHot.length == 0
                                ?
                                <NotFound />
                                :
                                <div>
                                    {this.createItem()}
                                    <div className="imformation-pagination">
                                        <Pagination current={this.state.current}
                                            pageSize={this.state.pageSize}
                                            defaultCurrent={1}
                                            total={this.state.data.otherHot.length}
                                            onChange={this.changePage.bind(this)} />
                                    </div>
                                </div>
                            }
                        </div>
                </div>
            </div>
        )
    }
}
Imformation.contextTypes = {
    router: routerShape.isRequired,
}
var INDUSTRY_DATA = ['公司', '行业', '国际', '国外'];
var DATA = [
    {
        title: '中广测创新红木鉴定技术 解决种',
        type: '行业新闻',
        viewNum: 1,
        time: '2016-05-05',
        desc: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',
        img: '/imformation/item_2.jpg',
        content:""
    },
];
