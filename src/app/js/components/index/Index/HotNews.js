import React, { Component } from 'react';
import news_ad from '../../../../images/news_ad.jpg';
import news_ad2 from '../../../../images/news_ad2.jpg';

export default class HotNews extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    createCenterItem() {
        var list = [];
        CENTER_DATA.map((obj, idx) => {
            list.push(
                <li className="index-hotNews-centerItem">
                    <a href={obj.src}>{obj.title}</a>
                    <p>{obj.content.substr(0, 50)+'...'}</p>
                </li>
            )
        })
        return list;
    }

    render() {
        return (
            <div className="index-hotNews clearfix">
                <div className="index-hotNews-left">

                </div>
                <ul className="index-hotNews-center">
                    {this.createCenterItem()}
                </ul>
                <div className="index-hotNews-right">
                  <img className="img_full" src={news_ad} />
                </div>
            </div>
        )
    }
}
const CENTER_DATA = [
    {title: "小米首款电饭煲正式发布 米粉节首发开卖！", content: "3月29日下午，小米旗下米家品牌(原小米生态链)正式发布了旗下首款电饭煲，由前三洋电饭煲", src: "/"},
    {title: "小米首款电饭煲正式发布 米粉节首发开卖！", content: "3月29日下午，小米旗下米家品牌(原小米生态链)正式发布了旗下首款电饭煲，由前三洋电饭煲", src: "/"},
    {title: "小米首款电饭煲正式发布 米粉节首发开卖！", content: "3月29日下午，小米旗下米家品牌(原小米生态链)正式发布了旗下首款电饭煲，由前三洋电饭煲", src: "/"},
    {title: "小米首款电饭煲正式发布 米粉节首发开卖！", content: "3月29日下午，小米旗下米家品牌(原小米生态链)正式发布了旗下首款电饭煲，由前三洋电饭煲", src: "/"},
];
