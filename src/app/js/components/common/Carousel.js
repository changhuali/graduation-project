import React, { Component } from 'react';
var t = undefined;
export default class Carousel extends Component{
    constructor(props){
        super(props);
        this.state={
            right: 0,
            index: 0,
        }
    }

    componentDidMount(){
        this.startAnimate();
    }

    startAnimate() {
        t = setTimeout(()=>{
            var newIndex = this.state.index + 1;
            if(this.state.index == this.props.imgSource.length-1){
                this.setState({
                    right: 0,
                    index: 0,
                })
            }else{
                this.setState({
                    right: this.state.right+Number(this.props.width),
                    index: newIndex,
                })
            }
            this.startAnimate();
        }, this.props.timeCycle);
    }

    createImgItem(imgSource) {
        var list = [];
        var styles = {
            width: this.props.width,
            height: this.props.height
        };
        imgSource.map((imgSrc, idx) => {
            list.push(<div key={"img"+idx} style={styles} className="carousel-itemImg">
                        <img onMouseOver={this.pauseAnimate.bind(this)} style={{width: "100%", height: "100%"}} src={imgSrc} />
                      </div>)
        });
        return list;
    }
    changeIndex(idx) {
        clearTimeout(t)
        this.setState({
            index: idx,
            right: idx*this.props.width,
        })
        this.startAnimate();
    }

    pauseAnimate() {
        clearTimeout(t);
    }

    continueAnimate() {
        this.startAnimate();
    }

    createImgItemBtn(imgLength) {
        var list = [];
        for(let i=0; i<imgLength; i++) {
            var btnActive = i == this.state.index ? 'carousel-itemBtn carousel-btnActive' : 'carousel-itemBtn';
            list.push(<li onClick={this.changeIndex.bind(this, i)}
                          className={btnActive}></li>)
        }
        return list;
    }

    render() {
        var imgSource = this.props.imgSource;
        var imgLength = imgSource.length;
        return (
            <div onMouseLeave={this.continueAnimate.bind(this)} className="carousel">
                <div ref="carousel"
                     style={{width: Number(this.props.width*imgSource.length),
                            height: this.props.height,
                            position: "relative",
                            right: this.state.right,
                            transition: 'right 1s ease'}}
                     className="clearfix">
                    {this.createImgItem(imgSource)}
                </div>
                <ul style={{marginLeft: -(imgLength*10+(imgLength-1)*15)/2}} className="carousel-itemBtn-ul clearfix">
                  {this.createImgItemBtn(imgLength)}
                </ul>
            </div>
        )
    }
}
