import React, { Component } from 'react';

export default class PromotionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    createItem(DATA) {
        var list = [];
        DATA.data.map((obj, idx) => {
            list.push(
                <div key={'proD'+idx} style={{textAlign: 'center'}}>
                    <img src={obj.img} />
                </div>
            )
        })
        return list;
    }

    render() {
        var DATA = JSON.parse(localStorage.getItem('proDetail'));
        return (
            <div className="proDetail-wrap">
                <div className="proDetail clearfix">
                    <div className="proDetail-left">
                        {this.createItem(DATA)}
                    </div>
                    <div className='proDetail-right'>
                        <p>
                            <span className="promotion-key">活动内容:</span>
                            <span className="promotion-value">{DATA.content}</span>
                        </p>
                        <p>
                            <span className="promotion-key">活动时间:</span>
                            <span className="promotion-value">{DATA.time}</span>
                        </p>
                        <p>
                            <span className="promotion-key">活动地点:</span>
                            <span className="promotion-value">{DATA.location}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
