import React, { Component } from 'react';
import { connect } from 'react-redux';

class AuthPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>I am Auth Page</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const connectedAuthPage = connect(mapStateToProps)(AuthPage);
export { connectedAuthPage as AuthPage };