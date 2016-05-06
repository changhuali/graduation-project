import React, { Component } from 'react';
import {routerShape} from 'react-router';
import Loading from '../common/Loading';
import NotFound from '../common/NotFound';
import { Pagination } from 'antd';

export default class OnlineDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 30,
            selected: this.initSelected(),
            data: [],
        }
    }

    initSelected() {
        var arr = ["", "", ""];
        if(this.props.location.query.type) {
            arr[0] = this.props.location.query.type;
        }
        return arr;
    }

    valueNotInArr(arr, value) {
        var tag = arr.every((key) => {
            return key != value;
        });
        return tag;
    }

    getFilterData() {
        var list = [];
        var arr = this.state.selected;
        var params = {space: arr[0], part: arr[1], style: arr[2]};
        var condition = {};
        Object.keys(params).filter(key => {
            if(params[key] != ''){
                condition[key] = params[key];
            }
        })
        this.state.data.map((obj, idx) => {
            var tag = Object.keys(condition).every(key => {
                return obj[key] == condition[key];
            })
            if(tag) {
                list.push(obj);
            }
        })
        return list;
    }

    getCurrData() {
        var list = this.getFilterData();
        return list.slice((this.state.current-1)*this.state.pageSize, this.state.current*this.state.pageSize);
    }

    changePage(value) {
        this.setState({
            current: value,
        })
    }

    viewDetail(idx) {
        localStorage.setItem('demoDetail', JSON.stringify(this.getFilterData()))
        this.context.router.push({pathname: '/onlineDemo/'+idx});
    }

    createItem() {
        var arrObj={col0:[], col1:[], col2:[], col3:[]};
        var list = [];
        var data = this.getCurrData();
        data.map((obj, idx) => {
            arrObj['col'+idx%4].push(
                <div key={'col_' + idx} onClick={this.viewDetail.bind(this, idx)} className="onlineDemo-item">
                    <div className="onlineDemo-imgBox">
                        <img className="img_full onlineDemo-img" src={obj.img} />
                    </div>
                    <div className="onlineDemo-title">{obj.title}</div>
                </div>
            );
        });
        list.push(
            <div key={'col_box'} className="clearfix">
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
        data.map((key, idx) => {
            var style = key == this.state.selected[index] ? "onlineDemo-headerItem color_bold" : "onlineDemo-headerItem";
            list.push(
                <span key={idx} onClick={this.choose.bind(this, key, index)} className={style}>{key}</span>
            );
        });
        return list;
    }

    createSelectStr() {
        var list = [];
        this.state.selected.map((key, idx) => {
            if(key != "") {
                list.push(
                    <span key={idx} className="onlineDemo-selectedItem">
                        {key}<i onClick={this.choose.bind(this, '', idx)} className="fa fa-times"></i>
                    </span>
                );
            }
        });
        return list;
    }

    componentDidMount() {
        var keyword = this.props.location.query.keyword != undefined ? this.props.location.query.keyword : "";
        this.props.onlineDemoBoundAc.getOnlineDemoList({keyword: keyword});
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.onlineDemo.list.data != undefined) {
            this.setState({
                data: nextProps.onlineDemo.list.data,
            })
        }
    }

    render() {
        var data = this.state.data;
        return (
            <div className="onlineDemo-wrap">
              <div className="onlineDemo">
                <div className="onlineDemo-head">
                  <div className="onlineDemo-selected">
                      <div className="onlineDemo-selected-nav">装修效果图</div>
                      <div className="onlineDemo-selected-navCon">
                          {this.createSelectStr()}
                      </div>
                  </div>
                  <div>
                    <div className="onlineDemo-headBox">
                      <div className="bg_eee onlineDemo-head-type">空间</div>
                      <div className="onlineDemo-head-con">{this.createHeaderItem(SPACE, 0)}</div>
                    </div>
                    <div className="onlineDemo-headBox">
                      <div className="bg_eee onlineDemo-head-type">局部</div>
                      <div className="onlineDemo-head-con">{this.createHeaderItem(PART, 1)}</div>
                    </div>
                    <div className="onlineDemo-headBox">
                      <div className="bg_eee onlineDemo-head-type">风格</div>
                      <div className="onlineDemo-head-con">{this.createHeaderItem(STYLE, 2)}</div>
                    </div>
                  </div>
                </div>
                {data == undefined ?
                    <Loading />
                :
                this.getFilterData()['length'] > 0 ?
                <div>
                    {this.createItem()}
                    <div className="onlineDemo-pagination">
                        <Pagination
                            current={this.state.current}
                            defaultCurrent={1}
                            pageSize={this.state.pageSize}
                            total={this.getFilterData()['length']}
                            onChange={this.changePage.bind(this)} />
                    </div>
                </div>
                :
                <NotFound />}
              </div>
            </div>
        )
    }
}
OnlineDemo.contextTypes = {
    router: routerShape.isRequired,
}
var SPACE = ['客厅', '卧室', '餐厅', '厨房', '卫生间', '阳台', '书房', '玄关', '儿童房', '衣帽间', '花园'];
var PART  = ['背景墙', '吊顶', '隔断', '窗帘', '飘窗', '榻榻米', '橱柜', '博古架', '阁楼', '隐形门', '吧台', '酒柜', '鞋柜', '衣柜', '窗户', '相片墙', '楼梯', '其它'];
var STYLE = ['简约', '现代', '中式', '欧式', '美式', '田园', '新古典', '混搭', '地中海', '东南亚', '日式', '宜家', '北欧', '简欧'];
var DATA = [
  {title: '简约客厅背景墙效果图大全', img: '/onlineDemo/aaa_1.jpg', space: '客厅', part: '背景墙', style: '简约'},
  {title: '简约客厅背景墙效果图大全', img: '/onlineDemo/aaa_2.jpg', space: '客厅', part: '背景墙', style: '简约'},
  {title: '简约客厅背景墙效果图大全', img: '/onlineDemo/aaa_3.jpg', space: '客厅', part: '背景墙', style: '简约'},
  {title: '客厅电视背景墙后现代', img: '/onlineDemo/aab_1.jpg', space: '客厅', part: '背景墙', style: '现代'},
  {title: '现代中式设计客厅电视背景墙图', img: '/onlineDemo/aac_1.jpg', space: '客厅', part: '背景墙', style: '中式'},
  {title: '欧式风客厅设计装修', img: '/onlineDemo/aad_1.jpg', space: '客厅', part: '背景墙', style: '欧式'},
  {title: '美式客厅装修电视背景墙欣赏2015', img: '/onlineDemo/aae_1.jpg', space: '客厅', part: '背景墙', style: '美式'},
  {title: '田园风格室内客厅电视背景墙效果图', img: '/onlineDemo/aaf_1.jpg', space: '客厅', part: '背景墙', style: '田园'},
  {title: '古典风格室内客厅电视背景墙图大全', img: '/onlineDemo/aag_1.jpg', space: '客厅', part: '背景墙', style: '新古典'},
  {title: '简约客厅装修电视背景墙', img: '/onlineDemo/aah_1.jpg', space: '客厅', part: '背景墙', style: '混搭'},
  {title: '地中海客厅电视背景墙效果图大全', img: '/onlineDemo/aai_1.jpg', space: '客厅', part: '背景墙', style: '地中海'},
  {title: '东南亚古典风格客厅电视背景墙', img: '/onlineDemo/aaj_1.jpg', space: '客厅', part: '背景墙', style: '东南亚'},
  {title: '现代日式风格客厅电视背景墙图欣赏大全', img: '/onlineDemo/aak_1.jpg', space: '客厅', part: '背景墙', style: '日式'},
  {title: '宜家家装客厅电视背景墙', img: '/onlineDemo/aal_1.jpg', space: '客厅', part: '背景墙', style: '宜家'},
  {title: '北欧时尚设计客厅电视背景墙', img: '/onlineDemo/aam_1.jpg', space: '客厅', part: '背景墙', style: '北欧'},
  {title: '简欧现代客厅装修电视背景墙', img: '/onlineDemo/aan_1.jpg', space: '客厅', part: '背景墙', style: '简欧'},
];
