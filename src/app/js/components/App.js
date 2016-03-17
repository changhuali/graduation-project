import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as testAc from '../action/testAc';

class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.testBoundAc.test();

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "------");
    }

    render(){
        return(
            <div>
                <div>this is header</div>
                <Link to={{pathname: '/index'}}>click</Link>
                {this.props.children}
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
