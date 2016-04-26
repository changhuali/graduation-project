import React, { Component } from 'react';

export default class DemoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: JSON.parse(localStorage.getItem('demoDetail'))[0]['img'],
            title: JSON.parse(localStorage.getItem('demoDetail'))[0]['title'],
        }
    }

    showImg(obj) {
        this.setState({
            imgUrl: obj.img,
            title: obj.title,
        })
    }

    createItem() {
        var list = [];
        var DATA = JSON.parse(localStorage.getItem('demoDetail'));
        DATA.map((obj, idx) => {
            list.push(
                <div key={'demo'+idx} className="demoDetail-listItem">
                    <a onClick={this.showImg.bind(this, obj)}><img src={obj.img} /></a>
                </div>
            )
        })
        return list;
    }

    render() {
        return (
            <div className="demoDetail-wrap">
                <div className="demoDetail">
                    <h2 className="demoDetail-title">{this.state.title}</h2>
                    <div className="demoDetail-imgBox">
                        <img src={this.state.imgUrl} />
                    </div>
                    <div className="demoDetail-listBox">
                        {this.createItem()}
                    </div>
                </div>
            </div>
        )
    }
}
