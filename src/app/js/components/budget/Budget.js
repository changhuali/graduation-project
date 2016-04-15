import React, { Component } from 'react';
import { Radio, Input, Select } from 'antd';
const RadioGroup = Radio.Group;

export default class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
          style: 1,
        }
    }

    selectStyle(e) {
      this.setState({
        style: e.target.value,
      });
    }

    render() {
        return (
            <div className="budget-wrap">
                <div className="budget">
                  <div className="budget-bg">
                  </div>
                  <div className="budget-form">
                    <input type="text" placeholder="您的称呼" />
                    <input type="text" placeholder="手机号码" />
                    <div className="budget-location">
                      <select className="budget-city">
                        <option>省份</option>
                      </select>
                      <select className="budget-province">
                        <option>市区</option>
                      </select>
                    </div>
                    <input type="text" placeholder="街道及小区" />
                    <input type="text" placeholder="装修面积" />
                    <div>
                      <select>
                        <option>装修风格</option>
                      </select>
                    </div>
                    <input type="button" value="免费报价" />
                  </div>
                </div>
            </div>
        )
    }
}
