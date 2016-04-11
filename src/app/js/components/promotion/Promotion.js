import React, { Component } from 'react';

export default class Promotion extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    createItem() {
      var list = [];
      DATA.map((obj, idx) => {
        list.push(
          <div className="promotion-item clearfix">
            <h2 className="promotion-title">{obj.title}</h2>
            <div className="promotion-img">
              <img className="img_full" src={obj.img} />
            </div>
            <div className="promotion-right">
              <p>{obj.content}</p>
              <p>
                <span className="promotion-key">活动时间:</span>
                <span className="promotion-value">{obj.time}</span>
              </p>
              <p>
                <span className="promotion-key">活动地点:</span>
                <span className="promotion-value">{obj.location}</span>
              </p>
              <span className="promotion-viewDetail">查看详情</span>
            </div>
          </div>
        );
      });
      return list;
    }

    render() {
        return (
            <div className="promotion-wrap">
              <div className="promotion">
                {this.createItem()}
              </div>
            </div>
        )
    }
}
var DATA = [
  {title: '全包一口价感恩答促59800', content: '为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费', location: '重庆市沙坪坝融城华府', time: '2016-04-11', img: '/promotion/item_1.jpg'},,
  {title: '全包一口价感恩答促59800', content: '为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费', location: '重庆市沙坪坝融城华府', time: '2016-04-11', img: '/promotion/item_3.jpg'},
  {title: '全包一口价感恩答促59800', content: '为答谢广大消费者长期以来对欧润装饰的信赖与支持，北京欧润装饰集团特地拿出千万装修基金下放到北京、成都、重庆等一线城市分公司，以实际的行动，让利于消费', location: '重庆市沙坪坝融城华府', time: '2016-04-11', img: '/promotion/item_1.jpg'},
];
