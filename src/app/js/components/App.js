import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as testAc from '../action/testAc';
import * as userAc from '../action/userAc';

import Header from './common/Header';
import Nav    from './common/Nav';
import SearchBar from './common/SearchBar';
import Footer from './common/Footer';

import '../../css/reset.css';
import '../../css/header.css';
import '../../css/searchBar.css';
import '../../css/nav.css';
import '../../css/footer.css';
import '../../css/login.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            bodyHeight: "",
        }
    }

    getBodyHeight() {
        var bodyHeight = window.innerHeight-228 < 550 ? 550 : window.innerHeight - 228;
        this.setState({
            bodyHeight: bodyHeight,
        })
    }

    componentDidMount() {
        this.getBodyHeight();
        window.onresize = () => {
            this.getBodyHeight();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render(){
        return(
            <div>
                <div>
                    <Header {...this.props} />
                </div>
                <div>
                    <SearchBar {...this.props} />
                </div>
                <div>
                    <Nav {...this.props} />
                </div>
                <div style={{height: this.state.bodyHeight}}>
                    {React.cloneElement(this.props.children, this.props)}
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
        test: state.test,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        testBoundAc: bindActionCreators(testAc, dispatch),
        userBoundAc: bindActionCreators(userAc, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
