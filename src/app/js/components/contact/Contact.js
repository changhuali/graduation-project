import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="contact-wrap">
              <div className="contact-head"></div>
              <div className="contact clearfix">
                <div className="contact-map"></div>
                <div className="contact-info">
                  <p className="contact-item"><i className="fa fa-phone"></i><span>电话: 11111111</span></p>
                  <p className="contact-item"><i className="fa fa-envelope-o"></i><span>传真: 22222222</span></p>
                  <p className="contact-item"><i className="fa fa-map-marker"></i><span>地址: 重庆市沙坪坝大学城重庆科技学院</span></p>
                </div>
              </div>
            </div>
        )
    }
}
