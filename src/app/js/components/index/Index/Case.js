import React, { Component } from 'react';
import case_1 from '../../../../images/case_1.jpg';
import case_2 from '../../../../images/case_2.jpg';
import case_3 from '../../../../images/case_3.jpg';
import case_4 from '../../../../images/case_4.jpg';

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
    {img: case_1, text: '现代风'},
    {img: case_2, text: '混搭风'},
    {img: case_3, text: '北欧风'},
    {img: case_4, text: '简欧风'},
];
