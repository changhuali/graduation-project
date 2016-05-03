import React, { Component } from 'react';
import {routerShape} from 'react-router';
import { Pagination } from 'antd';

import Loading from '../common/Loading';
import NotFound from '../common/NotFound';

export default class FamilyCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 5,
            data: this.props.familyCase.list.data,
        }
    }

    getCurrData() {
        return this.state.data.slice((this.state.current-1)*this.state.pageSize, this.state.current*this.state.pageSize);
    }

    changePage(value) {
        this.setState({
            current: value,
        });
    }

    viewDetail(obj) {
        localStorage.setItem('caseDetail', JSON.stringify(obj));
        if(obj) {
            this.context.router.push({pathname: '/familyCase/'+obj._id});
        }
    }

    componentDidMount() {
        var keyword = this.props.location.query.keyword != undefined ? this.props.location.query.keyword : "";
        this.props.familyCaseBoundAc.getFamilyCaseList({keyword: keyword});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.familyCase.list.data != undefined) {
            this.setState({
                data: nextProps.familyCase.list.data,
            })
        }
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    createItem() {
        var list = [];
        var data = this.getCurrData();
        data.map((obj, idx) => {
            list.push(
                <div onClick={this.viewDetail.bind(this, obj)} key={idx} className="familyCase-item">
                    <div className="familyCase-info">
                        <h2 className="familyCase-tit">{obj.title}</h2>
                        <p className="familyCase-text">{obj.description.substr(0, 20)}</p>
                    </div>
                    <div className="familyCase-img1">
                        <img src={obj.img_1} />
                    </div>
                    <div className="familyCase-img2">
                        <img src={obj.img_2} />
                    </div>
                    <div className="familyCase-img3">
                        <img src={obj.img_3} />
                    </div>
                    <div className="familyCase-img4">
                        <img src={obj.img_4} />
                    </div>
                    <div className="familyCase-img5">
                        <img src={obj.img_5} />
                    </div>
                </div>
            );
        });
        return list;
    }

    render() {
        return (
            <div className="familyCase-wrap">
                {this.state.data == undefined
                    ?
                    <Loading />
                    :
                    this.state.data.length == 0
                    ?
                    <NotFound message="暂时没有相关案列" />
                    :
                    <div className="familyCase">
                        {this.createItem()}
                        <div className="familyCase-pagination">
                            <Pagination
                                onChange={this.changePage.bind(this)}
                                defaultCurrent={1}
                                current={this.state.current}
                                pageSize={this.state.pageSize}
                                total={DATA.length} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

FamilyCase.contextTypes = {
    router: routerShape.isRequired,
}
var DATA = [
    {
        title: '休闲写意的居心宅',
        description: '位居高地的别墅案例，坐拥可俯瞰城市的无敌景观，已届退休之龄的屋主期待构筑一方辽阔敞明的居心宅，除了要融入旧有的中 式家具，还要注入大量实木元素，从五感体会休闲写意的生活情调。',
        img_1: '/familyCase/item_1/item_1_1.jpg',
        img_2: '/familyCase/item_1/item_1_2.jpg',
        img_3: '/familyCase/item_1/item_1_3.jpg',
        img_4: '/familyCase/item_1/item_1_4.jpg',
        img_5: '/familyCase/item_1/item_1_5.jpg',
        data: [
            {title: '屋主的精品收藏罗列在门斗两侧，增添入内动线的艺术气息.', img: '/familyCase/caseDetail/item_1/item_1_1.jpg'},
            {title: '大理石凿刻的半高电视墙分界客厅与厨房，保有敞阔绵延的空间视感。', img: '/familyCase/caseDetail/item_1/item_1_2.jpg'},
            {title: '拥有双向采光的客厅，设计师严选实木造型茶几画龙点睛出设计主题。', img: '/familyCase/caseDetail/item_1/item_1_3.jpg'},
            {title: '设计师接续中岛线条，采用无修边的实木增添轻食吧柜的功能。', img: '/familyCase/caseDetail/item_1/item_1_4.jpg'},
            {title: '外推餐厅坐拥前后花园景致，搭配涂刷植物油的桧木元素，形构馨香优雅的花园餐厅。', img: '/familyCase/caseDetail/item_1/item_1_5.jpg'},
            {title: '引入和室外的窗光穿透中式窗花，让楼梯间也成为美丽的展示空间。', img: '/familyCase/caseDetail/item_1/item_1_6.jpg'},
            {title: '线条简约的卧房注入大量实木元素，搭配屋主旧有的家私收藏，呈现女主人房的温润表情。', img: '/familyCase/caseDetail/item_1/item_1_7.jpg'},
            {title: '设计师运用同一块香杉材质拼构立面造型，以色泽纹理丰润空间。', img: '/familyCase/caseDetail/item_1/item_1_8.jpg'},
            {title: '屋主旧有的中式家具搭配实木蔓延自然的原生肌理，兼具主题风格与生活温度。', img: '/familyCase/caseDetail/item_1/item_1_9.jpg'},
            {title: '为偶尔回家探视留宿的儿子预留歇息空间，以浅紫色绷布床头柔和设计表情。', img: '/familyCase/caseDetail/item_1/item_1_10.jpg'},
            {title: '大尺度书桌，让喜爱书法与绘画的屋主有自由挥洒的空间。', img: '/familyCase/caseDetail/item_1/item_1_11.jpg'},
        ],
    },
    {
        title: '轻盈穿透北欧住宅',
        description: '设计只要简单合宜，就能淬炼空间美学。设计师以穿透、轻盈、明亮感为设计重点，让空间内盈满着轻透的日光，并透过玻璃材质作为屏隔，在视觉上营造出延伸的景深，缔造屋主一家所企盼敞朗与宽阔的居家主题。',
        img_1: '/familyCase/item_2/item_2_1.jpg',
        img_2: '/familyCase/item_2/item_2_2.jpg',
        img_3: '/familyCase/item_2/item_2_3.jpg',
        img_4: '/familyCase/item_2/item_2_4.jpg',
        img_5: '/familyCase/item_2/item_2_5.jpg',
        data: [
            {title: '在客厅的表现上，清新简约的调性，融入户外露台的休闲感，也让窗外暖阳盈满全室空间.', img: '/familyCase/caseDetail/item_2/item_2_1.jpg'},
            {title: '设计师使用玻璃的轻透性，作为区隔书房与餐厨区的隔屏，让整体空间明亮轻透。', img: '/familyCase/caseDetail/item_2/item_2_2.jpg'},
            {title: '敞开玻璃拉门，就能将客餐厅并为一区，让行走的动线更为流畅。', img: '/familyCase/caseDetail/item_2/item_2_3.jpg'},
            {title: '简洁利落、带有北欧感的餐厨区，是屋主一家幸福欢聚的场所。', img: '/familyCase/caseDetail/item_2/item_2_4.jpg'},
            {title: '书房的玻璃拉门引导阳光注入室内，映照出长廊的明亮舒适。', img: '/familyCase/caseDetail/item_2/item_2_5.jpg'},
            {title: '10公分的架高地面区隔公共空间与书房的功能，廊道立面使用的清水模漆也成为视觉端景。', img: '/familyCase/caseDetail/item_2/item_2_6.jpg'},
            {title: '强调卧眠的舒适感，设计以简约的北欧调性舒展一天的疲劳。', img: '/familyCase/caseDetail/item_2/item_2_7.jpg'},
            {title: '主卧运用的木皮元素，在床头、立面与书桌等处，挥洒出温润的质韵。', img: '/familyCase/caseDetail/item_2/item_2_8.jpg'},
            {title: '营造空间的惊喜，在床尾处设计收藏品的展示区，拥抱甜蜜故事入梦。', img: '/familyCase/caseDetail/item_2/item_2_9.jpg'},
        ],
    },
];
