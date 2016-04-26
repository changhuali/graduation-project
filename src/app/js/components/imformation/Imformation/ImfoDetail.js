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

            <div className="imformation-detail">
                <h2>{data.title}</h2>
                <div>
                    <span>{'发布时间: '+data.time}</span>
                    <span>{'新闻分类: '+data.type}</span><span>{'浏览数：'+(data.viewNum+1)}</span>
                </div>
                <div id="imformationDetail"></div>
            </div>
        )
    }
}
