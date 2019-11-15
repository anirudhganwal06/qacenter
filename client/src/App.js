import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Header from "../src/components/layout/header";
import Footer from "../src/components/layout/footer";
import Login from "../src/components/auth/login";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/login" component={Login} />
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
