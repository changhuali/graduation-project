import React, { Component } from 'react';

export default class ImfoDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var data = JSON.parse(localStorage.getItem('imformation'));
        console.log(data.content);
        document.getElementById('imformationDetail').innerHTML = data.content;
    }

    render() {
        var data = JSON.parse(localStorage.getItem('imformation'));
        return (
            <div id="imformationDetail" className="imformation-detail">
            </div>
        )
    }
}
