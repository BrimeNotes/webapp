import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import '../styles/App.css';

import Landing from "./LandingPage";
import Login from "./LoginPage";
import Signup from "./SignupPage";
import Reset from "./ResetPage";
import Dashboard from "./Dashboard";
import Footer from "../components/Footer";

export default class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/reset" component={Reset} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
