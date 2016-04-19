import React, { Component } from 'react';
import { routerShape } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as userAc from '../action/userAc';

import Header from './common/Header';
import Nav    from './common/Nav';
import SearchBar from './common/SearchBar';
import Footer from './common/Footer';

import 'antd/lib/index.css';

import '../../css/reset.css';
import '../../css/header.css';
import '../../css/searchBar.css';
import '../../css/nav.css';
import '../../css/footer.css';
import '../../css/user.css';
import '../../css/carousel.css';
import '../../css/index.css';
import '../../css/familyPro.css';
import '../../css/familyCase.css';
import '../../css/onlineDemo.css';
import '../../css/budget.css';
import '../../css/imformation.css';
import '../../css/promotion.css';
import '../../css/about.css';
import '../../css/contact.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            hideNav: false,
            routeChangeToLR: false,
        }
    }

    hideNav(tag) {
        this.setState({
            hideNav: tag,
        })
    }

    componentDidMount() {
        this.props.userBoundAc.checkInfo();
    }

    componentWillReceiveProps(nextProps) {

    }

    render(){
        return(
            <div>
                <div>
                    <Header {...this.props} />
                </div>
                <div style={{display: this.state.hideNav == true ? "none" : "block"}}>
                    <SearchBar {...this.props} />
                </div>
                <div style={{display: this.state.hideNav == true ? "none" : "block"}}>
                    <Nav {...this.props} />
                </div>
                <div>
                    {React.cloneElement(this.props.children, Object.assign({}, this.props, {hideNav: this.hideNav.bind(this)}))}
                </div>
                <div>
                    <Footer {...this.props} />
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userBoundAc: bindActionCreators(userAc, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
