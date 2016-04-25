import React, { Component } from 'react';
import { Radio, Input, Select, message } from 'antd';
const RadioGroup = Radio.Group;

export default class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budgetForm: {
                type: "1",
                area: "",
                demand: "7",
                address: "",
                layout: "0",
                livingRoom: "1",
                bedRoom: "1",
                kitchenRoom: "1",
                bathRoom: "1",
                grade: "1",
                style: "1",
            }
        }
    }

    radioChange(e) {
        var newObj = Object.assign(this.state.budgetForm, {[e.target.name]: e.target.value});
        this.setState({
            budgetForm: newObj,
        })
    }

    inputChange(e) {
        this.radioChange(e);
    }

    selectChange(key, value) {
        var newObj = Object.assign(this.state.budgetForm, {[key]: value});
        this.setState({
            budgetForm: newObj,
        })
    }

    submitForm() {
        var formObj = this.state.budgetForm;
        if(formObj.area == "") {
            message.warn('请填写装修面积');
        }else if(formObj.demand == "7") {
            message.warn('请选择装修状态');
        }else if(formObj.address == "") {
            message.warn('请填写装修地址');
        }else{
            message.info('获取报价成功');
        }
    }

    render() {
        var formObj = this.state.budgetForm;
        console.log(formObj);
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
                                <RadioGroup onChange={this.radioChange.bind(this)} value={formObj.type}>
                                    <Radio name="type" key="a" value="1"> 新房装修 </Radio>
                                    <Radio name="type" key="b" value="2"> 二手房装修 </Radio>
                                </RadioGroup>
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">房屋面积</span>
                                <Input name="area" style={{width: '300px', height: '25px'}} onChange={this.inputChange.bind(this)} value={formObj.area} /> 平方米
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">装修需求</span>
                                <Select style={{ width: 150 }} defaultValue="7" onChange={this.selectChange.bind(this, 'demand')}>
                                    <Option value="1">没交房,提前了解</Option>
                                    <Option value="2">毛胚房,装修出租</Option>
                                    <Option value="3">毛胚房,装修自住</Option>
                                    <Option value="4">毛胚房,豪装自住</Option>
                                    <Option value="5">旧房整体翻新重装</Option>
                                    <Option value="6">旧房局部改造装修</Option>
                                    <Option value="7">请选择装修状态</Option>
                                </Select>
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">房屋地址</span>
                                <Input name="address" style={{width: '300px', height: '25px'}} onChange={this.inputChange.bind(this)} value={formObj.address} />
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">房屋户型</span>
                                <Select style={{width: '85px'}} defaultValue='0' onChange={this.selectChange.bind(this, 'layout')}>
                                    <Option value="1">小户型</Option>
                                    <Option value="2">公寓</Option>
                                    <Option value="3">别墅</Option>
                                    <Option value="0">普通住宅</Option>
                                </Select>
                                <Select style={{marginLeft: '20px'}} defaultValue='1' onChange={this.selectChange.bind(this, 'bedRoom')}>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                </Select> 室
                                <Select style={{marginLeft: '20px'}} defaultValue='1' onChange={this.selectChange.bind(this, 'livingRoom')}>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select> 厅
                                <Select style={{marginLeft: '20px'}} defaultValue='1' onChange={this.selectChange.bind(this, 'kitchenRoom')}>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select> 厨
                                <Select style={{marginLeft: '20px'}} defaultValue='1' onChange={this.selectChange.bind(this, 'bathRoom')}>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select> 卫
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">装修档次</span>
                                <RadioGroup onChange={this.radioChange.bind(this)} value={formObj.grade}>
                                    <Radio name="grade" key="a" value="1">简装</Radio>
                                    <Radio name="grade" key="b" value="2">精装</Radio>
                                    <Radio name="grade" key="c" value="3">豪装</Radio>
                                </RadioGroup>
                            </div>
                            <div className="budget-item">
                                <span className="budget-key">装修风格</span>
                                <RadioGroup onChange={this.radioChange.bind(this)} value={formObj.style}>
                                    <Radio name="style" key="a" value="1">现代简约</Radio>
                                    <Radio name="style" key="b" value="2">田园</Radio>
                                    <Radio name="style" key="c" value="3">地中海</Radio>
                                    <Radio name="style" key="d" value="4">欧式</Radio>
                                    <Radio name="style" key="e" value="5">中式古典</Radio>
                                </RadioGroup>
                            </div>
                            <div className="budget-item">
                                <input type='button' value="获取报价" onClick={this.submitForm.bind(this)} />
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
