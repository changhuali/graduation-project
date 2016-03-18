import React, { Component } from 'react';
import Login from './Login';

export default class Regist extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <Login tabActive="regist" {...this.props} />
        )
    }
}
