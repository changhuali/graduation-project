import React, { Component } from 'react';
import {Spin} from 'antd';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{width: '960px', margin: '0 auto', textAlign: 'center', padding: '100px 0', minHeight: '400px'}}>
                <Spin />
            </div>
        )
    }
}
