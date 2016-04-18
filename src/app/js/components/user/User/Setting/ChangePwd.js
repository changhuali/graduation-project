import React, { Component } from 'react';
import { notification } from 'antd';
import { __FORMCHECK__ } from '../../../../../../config/class';

export default class ChangePwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeObj: {
                befPwd: "",
                newPwd: "",
                rePwd: "",
            },
            changeTag: {
                befPwd: false,
                newPwd: false,
                rePwd: false,
            },
            changing: false,
            message: ""
        }
    }

    setChangeObj(e) {
        var newObj = Object.assign({}, this.state.changeObj, {[e.target.name]: e.target.value});
        this.setState({
            changeObj: newObj,
        })
    }

    checkFormat(e) {
        var message = "";
        switch(e.target.name) {
            case "befPwd":
                message = '原' + __FORMCHECK__.checkPwd(e.target.value);
                break;
            case "newPwd":
                message = '新' + __FORMCHECK__.checkPwd(e.target.value);
                break;
            case "rePwd":
                message = __FORMCHECK__.checkRePwd(this.state.changeObj.rePwd, this.state.changeObj.newPwd);
                break;
        }
        console.log(message, '====');
        if(message.length != 0){
            this.setState({
                message: message,
                changeTag: Object.assign(this.state.changeTag, {[e.target.name]: false}),
            })
        }else{
            this.setState({
                changeTag: Object.assign(this.state.changeTag, {[e.target.name]: true}),
            })
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
        }else if(this.state.message == ""){
            notification.error({
                description: "请完善用户信息",
            })
        }else{
            notification.error({
                description: this.state.message,
                duration: 3,
            });
        }
    }

    render() {
        var formObj = this.state.changeObj;
        return (
            <div>
                <input className="user-right-user"
                    type='text'
                    name="befPwd"
                    onChange={this.setChangeObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.befPwd}
                    autoComplete="off"
                    placeholder="原密码" />
                <input className="user-right-pwd"
                    type='password'
                    name="newPwd"
                    onChange={this.setChangeObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.newPwd}
                    autoComplete="off"
                    placeholder="新密码" />
                <input className="user-right-pwd"
                    type='password'
                    name="rePwd"
                    onChange={this.setChangeObj.bind(this)}
                    onBlur={this.checkFormat.bind(this)}
                    value={formObj.rePwd}
                    autoComplete="off"
                    placeholder="确认密码" />
                <button className="user-right-sub"
                    onClick={this.change.bind(this)}
                    disabled={this.state.changing ? "disabled" : ""}>
                    {this.state.changing ? "修改中" : "立即修改"}
                </button>
            </div>
        )
    }
}
