import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class OnlineDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 1,
          pageSize: 30,
        }
    }

    getCurrData() {
      return DATA.slice((this.state.current-1)*this.state.pageSize, this.state.current*this.state.pageSize);
    }

    changePage(value) {
      console.log(value);
      this.setState({
        current: value,
      })
    }

    createItem() {
      var arrObj={col0:[], col1:[], col2:[], col3:[]};
      var list = [];
      var data = this.getCurrData();
      data.map((obj, idx) => {
        arrObj['col'+idx%4].push(
          <div className="onlineDemo-item">
            <div className="onlineDemo-img">
              <img className="img_full" src={obj.img} />
            </div>
            <div className="onlineDemo-title">{obj.title}</div>
          </div>
        );
      });
      list.push(
        <div className="clearfix">
          <div className="onlineDemo-col1">{arrObj.col0}</div>
          <div className="onlineDemo-col2">{arrObj.col1}</div>
          <div className="onlineDemo-col3">{arrObj.col2}</div>
          <div className="onlineDemo-col4">{arrObj.col3}</div>
        </div>
      );
      return list;
    }

    render() {
        return (
            <div className="onlineDemo-wrap">
              <div className="onlineDemo">
                <div>

                </div>
                {this.createItem()}
                <div className="onlineDemo-pagination">
                  <Pagination
                    current={this.state.current}
                    defaultCurrent={1}
                    pageSize={this.state.pageSize}
                    total={DATA.length}
                    onChange={this.changePage.bind(this)} />
                </div>
              </div>
            </div>
        )
    }
}
var DATA = [
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/living_room/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/living_room/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/living_room/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/living_room/4.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/dining_room/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/dining_room/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/dining_room/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/dining_room/4.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bathroom/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bathroom/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bathroom/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bathroom/4.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bedroom/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bedroom/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bedroom/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bedroom/4.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bg_wall/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bg_wall/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bg_wall/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/bg_wall/4.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/kitchen/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/kitchen/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/kitchen/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/kitchen/4.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/suspended_ceiling/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/suspended_ceiling/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/suspended_ceiling/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/suspended_ceiling/4.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/balcony/1.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/balcony/2.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/balcony/3.jpg', id: ''},
  {title: '二居客厅电视背景墙装修效果图片', img: '/onlineDemo/balcony/4.jpg', id: ''},
];
