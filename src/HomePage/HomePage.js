import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>I am Home Page</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };