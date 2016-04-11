import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class Imformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 1,
          pageSize: 10,
        }
    }

    getCurrData() {
      return DATA.slice((this.state.current-1)*this.state.pageSize, this.state.current*this.state.pageSize);
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
          <div key={idx} className="imformation-item clearfix">
            <div className="imformation-img">
              <img src={obj.img} />
            </div>
            <div className="information-con">
              <h3 className="imformation-title"><a href="javascript:;">{obj.title}</a></h3>
              <p className="imformation-text">{obj.content}</p>
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

    render() {
        return (
            <div className="imformation-wrap">
              <div className="imformation">
                {this.createItem()}
                <div className="imformation-pagination">
                  <Pagination current={this.state.current}
                    pageSize={this.state.pageSize}
                    defaultCurrent={1}
                    total={DATA.length}
                    onChange={this.changePage.bind(this)} />
                </div>
              </div>
            </div>
        )
    }
}
var DATA = [
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_1.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_2.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_3.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_4.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_1.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_2.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_3.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_4.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_1.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_2.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_3.jpg'},
  {title: '中广测创新红木鉴定技术 解决种属鉴定难题', type: '行业新闻', viewNum: 1, time: '2016-05-05', content: '如今，购买红木家具的家庭多了起来，但是市场上五花八门的木材让普通消费者一时难以辨别。以次充好、假冒伪劣的红木家具不仅扰乱了市场秩序，也影响了整个红木行业的信誉',img: '/imformation/item_4.jpg'},
];
