import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class OnlineDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 1,
          pageSize: 30,
          selected: ['在线样板房'],
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

    choose(value, index) {
      var arr = this.state.selected;
      arr[index] = value;
      this.setState({
        selected: arr,
      });
    }

    createHeaderItem(data, index) {
      var list = [];
      data.map(key => {
        var style = key == this.state.selected[index] ? "onlineDemo-headerItem color_bold" : "onlineDemo-headerItem";
        list.push(
          <span onClick={this.choose.bind(this, key, index)} className={style}>{key}</span>
        );
      });
      return list;
    }

    resetSelect(idx) {
      if(idx != 0) {
        var arr = this.state.selected;
        arr[idx] = '';
        this.setState({
          selected: arr,
        });
      }
    }

    createSelectStr() {
      var list = [];
      this.state.selected.map((key, idx) => {
        if(key != '') {
          list.push(
            <span onClick={this.resetSelect.bind(this, idx)} className="onlineDemo-selectedItem">
              {idx != 0 ? <i className="fa fa-angle-right"></i> : ''}
              {key}
            </span>
          );
        }
      });
      return list;
    }

    render() {
        return (
            <div className="onlineDemo-wrap">
              <div className="onlineDemo">
                <div className="onlineDemo-head">
                  <div className="onlineDemo-selected">{this.createSelectStr()}</div>
                  <div>
                    <div className="onlineDemo-headBox">
                      <span className="bg_eee">空间</span>{this.createHeaderItem(SPACE, 1)}</div>
                    <div className="onlineDemo-headBox">
                      <span className="bg_eee">局部</span>{this.createHeaderItem(PART, 2)}</div>
                    <div className="onlineDemo-headBox">
                      <span className="bg_eee">风格</span>{this.createHeaderItem(STYLE, 3)}</div>
                  </div>
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
var SPACE = ['客厅', '卧室', '厨房', '卫生间', '阳台', '餐厅'];
var PART  = ['背景墙', '吊顶'];
var STYLE = ['简约', '现代', '中式', '欧式', '美式', '田园'];
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
