import React, { Component } from 'react';
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
import '../../css/login.css';
import '../../css/carousel.css';
import '../../css/index.css';
import '../../css/familyPro.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            bodyHeight: "auto",
            hideNav: false,
            routeChangeToLR: false,
        }
    }

    jugeRouteIsLogin() {

    }

    getBodyHeight() {
        var bodyHeight = window.innerHeight-228 < 550 ? 550 : window.innerHeight - 232;
        this.setState({
            bodyHeight: bodyHeight,
        })
    }

    hideNav(tag) {
        this.setState({
            hideNav: tag,
        })
    }

    componentDidMount() {
        this.props.userBoundAc.checkInfo();
        this.getBodyHeight();
        window.onresize = () => {
            this.getBodyHeight();
        }
    }


    componentWillReceiveProps(nextProps) {

    }

    render(){
        var  style= {minHeight: this.state.bodyHeight};
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
                <div  style={style}>
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
