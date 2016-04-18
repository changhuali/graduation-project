import React, { Component } from 'react';
import ChangePwd from './Setting/ChangePwd';
import ChangeName from './Setting/ChangeName';
import ChangePhone from './Setting/ChangePhone';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class Regist extends Component {
    constructor(props){
        super(props);
        this.state={
            bodyHeight: "auto",
        }
    }

    getBodyHeight() {
        var bodyHeight = window.innerHeight-370 < 500 ? 500 : window.innerHeight - 370;
        this.setState({
            bodyHeight: bodyHeight,
        })
    }

    componentDidMount() {
        this.props.hideNav(true);
        this.getBodyHeight();
        window.onresize = () => {
            this.getBodyHeight();
        }
    }

    render() {
        var style= {minHeight: this.state.bodyHeight};
        var formObj = this.state.registObj;
        return(
            <div style={style} className="user-right-settingForm">
                <Tabs tabPosition="left">
                    <TabPane tab="修改密码" key="1">
                        <div className="user-pane">
                            <ChangePwd {...this.props} />
                        </div>
                    </TabPane>
                    <TabPane tab="修改用户名" key="2">
                        <div className="user-pane">
                            <ChangeName {...this.props} />
                        </div>
                    </TabPane>
                    <TabPane tab="更换手机" key="3">
                        <div className="user-pane">
                            <ChangePhone {...this.props} />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
