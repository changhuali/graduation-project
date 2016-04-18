import React, { Component } from 'react';
import { notification } from 'antd';
import { __FORMCHECK__ } from '../../../../../../config/class';

export default class ChangeName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeObj: {
                userName: "",
            },
            changeTag: {
                userName: false,
            },
            changing: false,
            message: {
                userName: false,
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
            case "userName":
                message = __FORMCHECK__.checkUser(e.target.value);
                this.setMessage('userName', message);
                break;
        }
        console.log(message, '====');
        this.setState({
            changeTag: Object.assign(this.state.changeTag, {[e.target.name]: message.length != 0 ? false : true}),
        })
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
                    name="userName"
                    onChange={this.setChangeObj.bind(this)}
                    onFocus={this.resetMessage.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.userName}
                    autoComplete="off"
                    placeholder="用户名" />
                <p className="user-msg">{this.state.message.userName}</p>
                <button className="user-right-sub"
                    onClick={this.change.bind(this)}
                    disabled={this.state.changing ? "disabled" : ""}>
                    {this.state.changing ? "修改中" : "立即修改"}
                </button>
            </div>
        )
    }
}
