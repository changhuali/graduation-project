import React, { Component } from 'react';
import SimpleIntro from './About/SimpleIntro';
import Copyright from './About/Copyright';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModule: 'baseInfo',
        }
    }

    chooseModule(value) {
        this.setState({
            showModule: value,
        });
    }

    createNav() {
        var list = [];
        NAV_DATA.map((key, idx) => {
            var styles = this.state.showModule == key ? "about-navItem active" : "about-navItem";
            list.push(
                <div key={idx} onClick={this.chooseModule.bind(this, key)} className={styles}>
                    {NAV_DICT[key]}
                </div>
            );
        });
        return list;
    }

    createModule() {
        var obj = {
            baseInfo: <SimpleIntro />,
            copyRight: <Copyright />,
        };
        return obj[this.state.showModule];
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="about-wrap">
                <div className="about clearfix">
                    <div className="about-leftCon">
                        <div className="about-nav">
                            {this.createNav()}
                        </div>
                    </div>
                    {this.createModule()}
                </div>
            </div>
        )
    }
}
const NAV_DATA = ['baseInfo', 'copyRight'];
const NAV_DICT = {
    baseInfo: '公司简介',
    copyRight: '法律声明',
}
