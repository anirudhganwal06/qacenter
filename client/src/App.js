import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Test from "./components/layout/Test";

import Login from "./components/auth/Login";

import Dashboard from "./components/user/Dashboard";

import AuthRoute from "./components/common/AuthRoute";
import GuestRoute from "./components/common/GuestRoute";

import { setCurrentUser } from "./actions/auth";

// console.log(store.getState());
// if (!store.getState().auth.isAuthenticated) {
// }
// console.log(store.getState());

// console.log("Setting current user");

// console.log("in app");
class App extends Component {
    componentDidMount() {
        store.dispatch(setCurrentUser());
    }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <GuestRoute exact path="/login" component={Login} />
                        <AuthRoute
                            exact
                            path="/user/:userId/dashboard"
                            component={Dashboard}
                        />
                        <Route exact path="/test" component={Test} />
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
