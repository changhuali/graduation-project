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
                        <div className="budget-con">
                            <div className='budget-tit clearfix'>
                                <span className="budget-base">房屋基础信息</span>
                                <span className="budget-count">今天已经有<span className="color_theme">2561</span>位业主免费成功获取报价清单</span>
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">装修种类</span>
                                <RadioGroup>
                                    <Radio key="a" value={1}> 新房装修 </Radio>
                                    <Radio key="b" value={2}> 二手房装修 </Radio>
                                </RadioGroup>
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">房屋面积</span>
                                <Input style={{width: '300px', height: '25px'}} /> 平方米
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">装修需求</span>
                                <Select defaultValue="0" style={{ width: 150 }}>
                                    <Option value="1">没交房,提前了解</Option>
                                    <Option value="2">毛胚房,装修出租</Option>
                                    <Option value="3">毛胚房,装修自住</Option>
                                    <Option value="4">毛胚房,豪装自住</Option>
                                    <Option value="5">旧房整体翻新重装</Option>
                                    <Option value="6">旧房局部改造装修</Option>
                                    <Option value="0">请选择装修状态</Option>
                                </Select>
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">房屋地址</span>
                                <Input style={{width: '300px', height: '25px'}} />
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">房屋户型</span>
                                <Select style={{width: '85px'}} defaultValue='0'>
                                    <Option value="1">小户型</Option>
                                    <Option value="2">公寓</Option>
                                    <Option value="3">别墅</Option>
                                    <Option value="0">普通住宅</Option>
                                </Select>
                                <Select style={{marginLeft: '20px'}} defaultValue='1'>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                </Select> 室
                                <Select style={{marginLeft: '20px'}} defaultValue='1'>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select> 厅
                                <Select style={{marginLeft: '20px'}} defaultValue='1'>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select> 厨
                                <Select style={{marginLeft: '20px'}} defaultValue='1'>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select> 卫
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">装修档次</span>
                                <RadioGroup>
                                    <Radio key="a" value="1">简装</Radio>
                                    <Radio key="b" value="2">精装</Radio>
                                    <Radio key="c" value="3">豪装</Radio>
                                </RadioGroup>
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">装修风格</span>
                                <RadioGroup>
                                    <Radio key="a" value="1">现代简约</Radio>
                                    <Radio key="b" value="2">田园</Radio>
                                    <Radio key="c" value="3">地中海</Radio>
                                    <Radio key="d" value="4">欧式</Radio>
                                    <Radio key="e" value="5">中式古典</Radio>
                                </RadioGroup>
                            </div>
                            <div className="budget-item">
                                <input type='button' value="获取报价" />
                            </div>
                        </div>
                        <div className="budget-rightBg">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
