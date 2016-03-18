import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <div className="footer-wrap">
                <div className="footer">
                    <p className="footer-nav">
                        <a className="footer-nav-a" href="#">关于我们</a>
                        <a className="footer-nav-a" href="#">联系我们</a>
                        <a className="footer-nav-a" href="#">友情链接</a>
                        <a className="footer-nav-a" href="#">帮助中心</a>
                        <a className="footer-nav-a" href="#">意见反馈</a>
                        <a className="footer-nav-a" href="#">高薪聘请</a>
                        <a className="footer-nav-a" href="#">法律声明</a>
                    </p>
                    <p>免责声明：本网站部分内容由用户自行上传，如权利人发现存在误传其作品情形，请及时与本站联系。</p>
                    <p>© 2016 Tubatu.com 土巴兔装修网和设计师社区 保留所有权利</p>
                    <p>中国装修网 粤ICP备08125558号</p>
                </div>
            </div>
        )
    }
}
