import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Header from "../src/components/layout/header";
import Footer from "../src/components/layout/footer";
import Landing from "../src/components/layout/landing";
import Login from "../src/components/auth/login";
import Dashboard from "../src/components/user/dashboard";

import { setCurrentUser } from "./actions/auth";

// console.log(store.getState());
// if (!store.getState().auth.isAuthenticated) {
// }
store.dispatch(setCurrentUser());
// console.log(store.getState());

// console.log("Setting current user");

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route
                        exact
                        path="/user/:userId/dashboard"
                        component={Dashboard}
                    />
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
