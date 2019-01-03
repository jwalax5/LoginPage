import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { AuthPage } from '../AuthPage';
import { NavBar, Footer } from '../_component';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            //Navigation
            <BrowserRouter>
                <div>
                    <NavBar />
                    <div className="container mt-5" >
                        <Route exact path="/" component={HomePage} />
                        <Route path="/auth" component={AuthPage} />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };