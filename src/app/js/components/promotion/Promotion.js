import React, { Component } from 'react';
import { Link, routerShape } from 'react-router';
import { Pagination } from 'antd';

import Loading from '../common/Loading';
import NotFound from '../common/NotFound';

export default class Promotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 5,
            data: this.props.promotion.list.data,
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
        localStorage.setItem('proDetail', JSON.stringify(obj));
        if(obj) {
            this.context.router.push({pathname: '/promotion/'+obj._id});
        }
    }

    componentDidMount() {
        this.props.promotionBoundAc.getPromotionList();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.promotion.list.data != undefined) {
            this.setState({
                data: nextProps.promotion.list.data,
            })
        }
        console.log(nextProps.location);
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    createItem() {
        var data = this.getCurrData();
        var list = [];
        data.map((obj, idx) => {
            list.push(
                <div key={idx} className="promotion-item clearfix">
                    <h2 className="promotion-title">{obj.title}</h2>
                    <div className="promotion-img">
                        <img className="img_full" src={obj.img} />
                    </div>
                    <div className="promotion-right">
                        <p>
                            <span className="promotion-key">活动内容:</span>
                            <span className="promotion-value">{obj.content.substr(0, 100)}</span>
                        </p>
                        <p>
                            <span className="promotion-key">活动时间:</span>
                            <span className="promotion-value">{obj.time}</span>
                        </p>
                        <p>
                            <span className="promotion-key">活动地点:</span>
                            <span className="promotion-value">{obj.location}</span>
                        </p>
                        <span onClick={this.viewDetail.bind(this, obj)} className="promotion-viewDetail">查看详情</span>
                    </div>
                </div>
            );
        });
        return list;
    }

    render() {
        return (
            <div className="promotion-wrap">
            {this.state.data == undefined ?
                <Loading />
                :
                this.state.length == 0
                ?
                <NotFound message="最近没有优惠活动哦, 您可以过一段时间再来看看" />
                :
                <div className="promotion">

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

Promotion.contextTypes = {
  router: routerShape.isRequired
}

var DATA = [
    {
        title: '全包一口价感恩答促59800',
        content: '为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费为答谢广大为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费',
        location: '重庆市沙坪坝融城华府',
        time: '2016-04-11',
        img: '/promotion/item_1.jpg',
        data: [
            {img: '/promotion/item_1/item_1.jpg'},
            {img: '/promotion/item_1/item_2.jpg'},
        ]
    },
    {
        title: '全包一口价感恩答促59800',
        content: '为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费',
        location: '重庆市沙坪坝融城华府',
        time: '2016-04-11',
        img: '/promotion/item_3.jpg',
        data: [
            {img: '/promotion/item_1/item_1.jpg'},
            {img: '/promotion/item_1/item_2.jpg'},
        ]
    },
    {
        title: '全包一口价感恩答促59800',
        content: '为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费',
        location: '重庆市沙坪坝融城华府',
        time: '2016-04-11',
        img: '/promotion/item_1.jpg',
        data: [
            {img: '/promotion/item_1/item_1.jpg'},
            {img: '/promotion/item_1/item_2.jpg'},
        ]
    },
];
