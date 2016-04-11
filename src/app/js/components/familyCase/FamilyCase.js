import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class FamilyCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 5,
        }
    }

    getCurrData() {
        return DATA.slice((this.state.current-1)*this.state.pageSize, this.state.current*this.state.pageSize);
    }

    changePage(value) {
        this.setState({
            current: value,
        });
    }

    createItem() {
        var list = [];
        var data = this.getCurrData();
        data.map((obj, idx) => {
            list.push(
                <div key={idx} className="familyCase-item">
                    <div className="familyCase-info">
                        <h2>{obj.title}</h2>
                        <p>{obj.description}</p>
                    </div>
                    <div className="familyCase-img1">
                        <img src={obj.img_1} />
                    </div>
                    <div className="familyCase-img2">
                        <img src={obj.img_2} />
                    </div>
                    <div className="familyCase-img3">
                        <img src={obj.img_3} />
                    </div>
                    <div className="familyCase-img4">
                        <img src={obj.img_4} />
                    </div>
                    <div className="familyCase-img5">
                        <img src={obj.img_5} />
                    </div>
                </div>
            );
        });
        return list;
    }

    render() {
        return (
            <div className="familyCase-wrap">
                <div className="familyCase">
                    {this.createItem()}
                    <div className="familyCase-pagination">
                        <Pagination
                            onChange={this.changePage.bind(this)}
                            defaultCurrent={1}
                            current={this.state.current}
                            pageSize={this.state.pageSize}
                            total={DATA.length} />
                    </div>
                </div>
            </div>
        )
    }
}
var DATA = [
    {id: '', title: '北京某某某1', description: '北京某某某', img_1: '/familyCase/item_1_1.jpg', img_2: '/familyCase/item_1_2.jpg', img_3: '/familyCase/item_1_3.jpg', img_4: '/familyCase/item_1_4.jpg', img_5: '/familyCase/item_1_5.jpg'},
    {id: '', title: '北京某某某2', description: '北京某某某', img_1: '/familyCase/item_2_1.jpg', img_2: '/familyCase/item_2_2.jpg', img_3: '/familyCase/item_2_3.jpg', img_4: '/familyCase/item_2_4.jpg', img_5: '/familyCase/item_2_5.jpg'},
    {id: '', title: '北京某某某1', description: '北京某某某', img_1: '/familyCase/item_3_1.jpg', img_2: '/familyCase/item_3_2.jpg', img_3: '/familyCase/item_3_3.jpg', img_4: '/familyCase/item_3_4.jpg', img_5: '/familyCase/item_3_5.jpg'},
    {id: '', title: '北京某某某1', description: '北京某某某', img_1: '/familyCase/item_1_1.jpg', img_2: '/familyCase/item_1_2.jpg', img_3: '/familyCase/item_1_3.jpg', img_4: '/familyCase/item_1_4.jpg', img_5: '/familyCase/item_1_5.jpg'},
    {id: '', title: '北京某某某2', description: '北京某某某', img_1: '/familyCase/item_2_1.jpg', img_2: '/familyCase/item_2_2.jpg', img_3: '/familyCase/item_2_3.jpg', img_4: '/familyCase/item_2_4.jpg', img_5: '/familyCase/item_2_5.jpg'},
    {id: '', title: '北京某某某1', description: '北京某某某', img_1: '/familyCase/item_3_1.jpg', img_2: '/familyCase/item_3_2.jpg', img_3: '/familyCase/item_3_3.jpg', img_4: '/familyCase/item_3_4.jpg', img_5: '/familyCase/item_3_5.jpg'},
    {id: '', title: '北京某某某1', description: '北京某某某', img_1: '/familyCase/item_1_1.jpg', img_2: '/familyCase/item_1_2.jpg', img_3: '/familyCase/item_1_3.jpg', img_4: '/familyCase/item_1_4.jpg', img_5: '/familyCase/item_1_5.jpg'},
    {id: '', title: '北京某某某2', description: '北京某某某', img_1: '/familyCase/item_2_1.jpg', img_2: '/familyCase/item_2_2.jpg', img_3: '/familyCase/item_2_3.jpg', img_4: '/familyCase/item_2_4.jpg', img_5: '/familyCase/item_2_5.jpg'},
    {id: '', title: '北京某某某1', description: '北京某某某', img_1: '/familyCase/item_3_1.jpg', img_2: '/familyCase/item_3_2.jpg', img_3: '/familyCase/item_3_3.jpg', img_4: '/familyCase/item_3_4.jpg', img_5: '/familyCase/item_3_5.jpg'},
];
