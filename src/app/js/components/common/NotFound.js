import React, { Component } from 'react';
import {Alert} from 'antd';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{width: '960px', margin: '0 auto', padding: '100px 0', minHeight: '400px'}}>
                <Alert type={this.props.type} message={this.props.message} />
            </div>
        )
    }
}
NotFound.defaultProps = {
    type: 'info',
    message: '没有找到相关信息',
}
