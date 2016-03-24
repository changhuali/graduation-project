import React , {Component} from 'react';
import search_logo from '../../../images/search_login.jpg';
import search_right from '../../../images/search_right.jpg';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected: "效果图",
        }
    }

    render() {
        return(
            <div className="searchBar-wrap">
                <div className="searchBar clearfix">
                    <div className="searchBar-img">
                        <img src={""} />
                    </div>
                    <div className="searchBar-from">
                        <div className="searchBar-select">
                            <div className="searchBar-select-value">{this.state.selected}</div>
                        </div>
                        <input type="text" className="searchBar-input" placeholder="输入您要查询的效果图" />
                        <input type="submit" className="searchBar-btn" value="搜索" />
                    </div>
                    <div className="searchBar-ad">
                        <img src={search_right} />
                    </div>
                </div>
            </div>
        )
    }
}
