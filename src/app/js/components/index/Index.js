import React, { Component } from 'react';
import Carousel from '../common/Carousel';
import Apply from './Index/Apply';
import section_head_1 from '../../../images/section_head_1.jpg';
import section_head_2 from '../../../images/section_head_2.jpg';
import section_head_3 from '../../../images/section_head_3.jpg';
import section_head_4 from '../../../images/section_head_4.jpg';

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render(){
        var imgArr  = [section_head_1, section_head_2, section_head_3, section_head_4]
        return(
            <div className="index-wrap">
                <div className="index">
                    <div className="index-head clearfix">
                        <div className="index-head-left">
                            <Apply {...this.props} />
                        </div>
                        <div className="index-head-right">
                            <Carousel imgSource={imgArr} width="898" height="345" timeCycle="5000" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
