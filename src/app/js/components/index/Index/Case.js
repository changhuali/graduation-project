import React, { Component } from 'react';

export default class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    createItem() {
        var list = [];
        DATA.map((obj, idx) => {
            list.push(
                <div className="index-case-item">
                    <img src={obj.img} />
                    <p>{obj.text}</p>
                </div>
            )
        })
        return list;
    }

    render() {
        return (
            <div className="index-case clearfix">
                {this.createItem()}
            </div>
        )
    }
}

const DATA = [
    {img: '', text: '某某某'},
    {img: '', text: '某某某'},
    {img: '', text: '某某某'},
    {img: '', text: '某某某'},
];
