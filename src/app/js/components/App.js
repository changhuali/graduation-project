import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as testAc from '../action/testAc';

import Header from './common/Header';
import Footer from './common/Footer';

import '../../css/reset.css';
import '../../css/header.css';
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
        var bodyHeight = window.innerHeight-228 < 480 ? 480 : window.innerHeight - 228;
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

    render(){
        return(
            <div>
                <div>
                    <Header {...this.props} />
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        testBoundAc: bindActionCreators(testAc, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
