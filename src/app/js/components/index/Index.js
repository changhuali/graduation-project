import React, { Component } from 'react';
import Carousel  from '../common/Carousel';
import Apply     from './Index/Apply';
import Progress  from './Index/Progress';
import Rendering from './Index/Rendering';
import Case      from './Index/Case';
import HotNews   from './Index/HotNews';
import Exhibition from './Index/Exhibition';
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
        var imgArr  = [
            {img: section_head_1},
            {img: section_head_2},
            {img: section_head_3},
            {img: section_head_4},
        ];
        return(
            <div className="index-wrap">
                <div className="index">
                    <div className="index-head clearfix">
                        <div className="index-applyArea">
                            <Apply {...this.props} />
                        </div>
                        <div className="index-carouselArea">
                            <Carousel {...this.props} imgSource={imgArr} width="898" height="345" timeCycle="2000" />
                        </div>
                    </div>
                    <div className="index-progressArea">
                        <h1 className="index-section-title">{TITLE_DATA['progress']['title']}<span className="index-section-childT">{TITLE_DATA['progress']['child']}</span></h1>
                        <Progress {...this.props} />
                    </div>
                    <div className="index-caseArea">
                        <h1 className="index-section-title">{TITLE_DATA['case']['title']}<span className="index-section-childT">{TITLE_DATA['case']['child']}</span></h1>
                        <Case {...this.props} />
                    </div>
                    <div className="index-renderingArea">
                        <h1 className="index-section-title">{TITLE_DATA['rendering']['title']}<span className="index-section-childT">{TITLE_DATA['rendering']['child']}</span></h1>
                        <Rendering {...this.props} />
                    </div>
                    <div className="index-hotNewsArea">
                        <h1 className="index-section-title">{TITLE_DATA['hotNews']['title']}<span className="index-section-childT">{TITLE_DATA['hotNews']['child']}</span></h1>
                        <HotNews {...this.props} />
                    </div>
                    <div className="index-exhibitionArea">
                        <h1 className="index-section-title">{TITLE_DATA['exhibition']['title']}<span className="index-section-childT">{TITLE_DATA['exhibition']['child']}</span></h1>
                        <Exhibition {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}
const TITLE_DATA = {
    progress:  {title: '装修流程', child: '业主权益第一，我们始终保障着业主装修每一步'},
    rendering: {title: '装修效果图', child: '您可以从效果图中获取您需要的设计风格及样式'},
    case: {title: '家装案例', child: '这都是真是的家装案例哦'},
    hotNews: {title: '热点新闻', child: ''},
    exhibition: {title: '展会专题', child: ''},
};
