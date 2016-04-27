import React, { Component } from 'react';
import {routerShape} from 'react-router';

export default class DemoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: JSON.parse(localStorage.getItem('demoDetail'))[this.getRouteParams()]['img'],
            title: JSON.parse(localStorage.getItem('demoDetail'))[this.getRouteParams()]['title'],
            active: (this.getRouteParams())%15,
            currPage: Math.ceil((this.getRouteParams()+1)/15),
            pageSize: 15,
        }
    }

    getRouteParams() {
        return Number(this.props.location.pathname.split('/')[2]);
    }

    showImg(obj, idx) {
        this.context.router.push('/onlineDemo/'+((this.state.currPage-1)*this.state.pageSize+idx));
        setTimeout(() => {
            document.getElementById('showImg').style.opacity = 1;
            this.setState({
                imgUrl: obj.img,
                title: obj.title,
                active: idx,
            });
        }, 300);
        document.getElementById('showImg').style.opacity = 0;
    }

    getCurrData() {
        var DATA = JSON.parse(localStorage.getItem('demoDetail'));
        return DATA.slice((this.state.currPage-1)*this.state.pageSize, this.state.currPage*this.state.pageSize);
    }

    nextPage() {
        var DATA = JSON.parse(localStorage.getItem('demoDetail'));
        if(this.state.currPage >= Math.ceil(DATA.length/this.state.pageSize)) {
            return false;
        }else{
            this.context.router.push('/onlineDemo/'+this.state.currPage*this.state.pageSize);
            this.setState({
                active: 0,
                currPage: this.state.currPage+1,
                imgUrl: JSON.parse(localStorage.getItem('demoDetail'))[this.state.currPage*this.state.pageSize]['img'],
                title: JSON.parse(localStorage.getItem('demoDetail'))[this.state.currPage*this.state.pageSize]['title'],
            })
        }
    }

    beforePage() {
        if(this.state.currPage == 1) {
            return false;
        }else{
            this.context.router.push('/onlineDemo/'+((this.state.currPage-1)*this.state.pageSize-1));
            this.setState({
                active: this.state.pageSize-1,
                currPage: this.state.currPage-1,
                imgUrl: JSON.parse(localStorage.getItem('demoDetail'))[((this.state.currPage-1)*this.state.pageSize-1)]['img'],
                title: JSON.parse(localStorage.getItem('demoDetail'))[((this.state.currPage-1)*this.state.pageSize-1)]['title'],
            })
        }
    }

    createItem() {
        var list = [];
        var data = this.getCurrData();
        data.map((obj, idx) => {
            var classStyle = this.state.active == idx ? "demoDetail-listItem active" : "demoDetail-listItem";
            list.push(
                <div key={'demo'+idx} className={classStyle}>
                    <a onClick={this.showImg.bind(this, obj, idx)}><img src={obj.img} /></a>
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
                        <img id="showImg" className="showImg" src={this.state.imgUrl} />
                    </div>
                    <div className="demoDetail-listBox">
                        <div className="demoDetail-listBox-con clearfix">{this.createItem()}</div>
                        <div onClick={this.beforePage.bind(this)} className="demoDetail-listIcon leftIcon"></div>
                        <div onClick={this.nextPage.bind(this)} className="demoDetail-listIcon rightIcon"></div>
                    </div>
                </div>
            </div>
        )
    }
}
DemoDetail.contextTypes = {
    router: routerShape.isRequired,
}
