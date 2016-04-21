import React, { Component } from 'react';

export default class CaseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    createItem(DATA) {
        var list = [];
        DATA.data.map((obj, idx) => {
            list.push(
                <div key={'caseD'+idx} className="caseDetail-item">
                    <Title>{obj.title}</Title>
                    <div className="caseDetail-itemImg">
                        <img src={obj.img} />
                    </div>
                </div>
            )
        })
        return list;
    }

    render() {
        var DATA = JSON.parse(localStorage.getItem('caseDetail'));
        return (
            <div className="caseDetail-wrap">
                <h1 className="caseDetail-title">{DATA.title}</h1>
                <div className="caseDetail">
                    <div className="caseDetail-head">
                        {DATA.description}
                    </div>
                    <div className="caseDetail-con">
                        {this.createItem(DATA)}
                    </div>
                </div>
            </div>
        )
    }
}
class Title extends Component {
    render() {
        return (
            <div className="caseDetail-headTit">
                <i className="fa fa-thumbs-up"></i>
                <span>{this.props.children}</span>
            </div>
        )
    }
}
