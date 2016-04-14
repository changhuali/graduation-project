import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
    render() {
        return (
            <div className="contact-wrap">
              <div className="contact-head"></div>
              <div className="contact clearfix">
                <div id="contactMap" className="contact-map"></div>
                <div className="contact-info">
                  <div className="contact-form">
                    <input type="text" placeholder="您的称呼" />
                    <input type="text" placeholder="联系方式"  />
                    <textarea  placeholder="您的建议或者遇到的问题"></textarea>
                    <input type="button" value="提交" />
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
