import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { AuthPage } from '../AuthPage';
import { NavBar, Footer, ProtectedRoute, AlertBox } from '../_component';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';


class App extends Component {

    constructor(props) {
        super(props);
    }

    addUser = () => {
        localStorage.setItem('user', 'josh');
    };

    removeUser = () => {
        localStorage.removeItem('user');
    };

    render() {
        const minHeight = {
            'minHeight': '80vh',
            'backgroundColor': 'red'
        };

        const { alert } = this.props;
        return (
            //Navigation
            <div>
                <AlertBox message={alert && alert.message} type={alert && alert.type} />
                <BrowserRouter>
                    <div>
                        <NavBar />
                        <div className="container mt-5" style={minHeight}>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <ProtectedRoute path="/auth" component={AuthPage} />
                            <Route path="/register" component={RegisterPage} />
                            <button onClick={this.addUser}>Add</button>
                            <button onClick={this.removeUser}>Clear</button>
                        </div>
                    </div>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state.alertReducer;
    return { alert };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };