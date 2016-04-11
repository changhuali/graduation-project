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
              <div className="budget-bg">
                <div className="budget">
                  <div className="budget-form">
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
