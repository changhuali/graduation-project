import React, { Component } from 'react';
import { notification } from 'antd';
import { __FORMCHECK__ } from '../../../../../../config/class';

export default class FindPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeObj: {
                phone: "",
                newPwd: "",
                checkCode: "",
            },
            changeTag: {
                phone: false,
                newPwd: false,
                checkCode: false,
            },
            checking: 61,
            changing: false,
            message: {
                phone: "",
                newPwd: "",
                checkCode: "",
            }
        }
    }

    setChangeObj(e) {
        var newObj = Object.assign({}, this.state.changeObj, {[e.target.name]: e.target.value});
        this.setState({
            changeObj: newObj,
        })
    }

    setMessage(key, value) {
        var newObj = Object.assign({}, this.state.message, {[key]: value});
        this.setState({
            message: newObj,
        });
    }

    checkFormat(e) {
        var message = "";
        switch(e.target.name) {
            case "phone":
                message = __FORMCHECK__.checkPhone(e.target.value, '原');
                this.setMessage('phone', message);
                break;
            case "newPwd":
                message = __FORMCHECK__.checkPhone(e.target.value, '新');
                this.setMessage('newPwd', message);
                break;
            case "checkCode":
                message = __FORMCHECK__.checkCode(e.target.value);
                this.setMessage('checkCode', message);
                break;
        }
        console.log(message, '====');
        this.setState({
            changeTag: Object.assign(this.state.changeTag, {[e.target.name]: message.length != 0 ? false : true}),
        })
    }

    getCheckCode() {
        var phone = this.state.changeObj.phone;
        if(phone != ''){
            this.props.userBoundAc.getCheckCode(phone);
            this.setState({
                checking: 60,
            });
            this.changeChecking();
        }else{
            notification.warn({
                description: '请输入手机号码',
            })
        }
    }

    changeChecking() {
        var time = this.state.checking;
        if(time > 0) {
            setTimeout(
                () => {
                    this.setState({
                        checking: time-1,
                    });
                    this.changeChecking();
                }, 1000
            );
        }else if(time == 0) {
            this.setState({
                checking: 61,
            });
        }
    }

    change(e) {
        e.preventDefault();
        var obj = this.state.changeTag;
        var tag = Object.keys(obj).every(key => {
            return obj[key] != false;
        })
        if(tag){
            this.setState({
                registing: true,
            })
            this.props.userBoundAc.regist(this.state.registObj);
        }else{
            notification.error({
                description: "请完善用户信息",
            })
        }
    }

    resetMessage(e) {
        this.setState({
            message: Object.assign({}, this.state.message, {[e.target.name]: ""}),
        })
    }

    render() {
        var formObj = this.state.changeObj;
        return (
            <div>
                <input className="user-right-user"
                    type='text'
                    name="phone"
                    onChange={this.setChangeObj.bind(this)}
                    onFocus={this.resetMessage.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.phone}
                    autoComplete="off"
                    placeholder="手机号码" />
                <p className="user-msg">{this.state.message.phone}</p>
                <input className="user-right-user"
                    type='text'
                    name="newPwd"
                    onChange={this.setChangeObj.bind(this)}
                    onFocus={this.resetMessage.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.phone}
                    autoComplete="off"
                    placeholder="新密码" />
                <p className="user-msg">{this.state.message.newPwd}</p>
                <input className="user-right-checkCode"
                    type='text'
                    name="checkCode"
                    onChange={this.setChangeObj.bind(this)}
                    onFocus={this.resetMessage.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.checkCode}
                    autoComplete="off"
                    placeholder="验证码" />
                <button onClick={this.getCheckCode.bind(this)} className="user-right-sub user-checkCode">
                    {this.state.checking == 61 ? '获取验证码' : this.state.checking + ' s后重新获取'}
                </button>
                <p className="user-msg">{this.state.message.checkCode}</p>
                <button className="user-right-sub"
                    onClick={this.change.bind(this)}
                    disabled={this.state.changing ? "disabled" : ""}>
                    {this.state.changing ? "修改中" : "立即修改"}
                </button>
            </div>
        )
    }
}
