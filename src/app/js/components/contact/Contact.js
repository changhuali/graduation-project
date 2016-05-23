import React, { Component } from 'react';
import {message} from 'antd';
import __has from 'lodash/has';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: {
                name: "",
                phone: "",
                advice: "",
            },
            loading: false,
        }
    }

    resetState() {
        this.setState({
            contactInfo: {
                name: "",
                phone: "",
                advice: "",
            },
            loading: false,
        })
    }

    componentDidMount() {
        var map = new BMap.Map("contactMap");          // 创建地图实例
        var point = new BMap.Point(106.3315440000, 29.5978260000);  // 创建点坐标
        map.centerAndZoom(point, 16);
        map.enableScrollWheelZoom(true);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }

    setContactParams(e) {
        var newObj = Object.assign({}, this.state.contactInfo, {[e.target.name]: e.target.value});
        this.setState({
            contactInfo: newObj,
        })
    }

    contactUs() {
        var params = this.state.contactInfo;
        var tag = Object.keys(params).every(key => {
            return params[key] != "";
        })
        if(tag){
            this.setState({
                loading: true,
            })
            var date = new Date();
            var params = {
                time: date.toLocaleString(),
                status: '未处理',
            }
            this.props.contactBoundAc.contactUs(Object.assign({}, this.state.contactInfo, params));
        }else{
            message.warn('请您完成所有内容后再进行提交', 2.5);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.contact.contactUs.ok) {
            this.resetState();
        }else if(__has(nextProps.contact.contactUs, 'errorCode')) {
            this.setState({
                loading: false,
            })
        }
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        var formObj = this.state.contactInfo;
        return (
            <div className="contact-wrap">
                <div className="contact-head"></div>
                <div className="contact clearfix">
                    <div id="contactMap" className="contact-map"></div>
                    <div className="contact-info">
                        <div className="contact-form">
                            <input type="text"
                                name="name"
                                onChange={this.setContactParams.bind(this)}
                                value={formObj.name}
                                placeholder="您的称呼" />
                            <input type="text"
                                name="phone"
                                onChange={this.setContactParams.bind(this)}
                                value={formObj.phone}
                                placeholder="手机号码"  />
                            <textarea name="advice"
                                onChange={this.setContactParams.bind(this)}
                                value={formObj.advice}
                                placeholder="您的建议或者遇到的问题">
                            </textarea>
                            <input onClick={this.contactUs.bind(this)} type="button" value={this.state.loading ? "提交中" : "提交"} disabled={this.state.loading ? "disabled" : ""} />
                        </div>
                        <p className="contact-item"><i className="fa fa-phone"></i><span>电话: 11111111</span></p>
                        <p className="contact-item"><i className="fa fa-envelope-o"></i><span>传真: 22222222</span></p>
                        <p className="contact-item"><i className="fa fa-map-marker"></i><span>地址: 重庆市沙坪坝大学城重庆科技学院</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
