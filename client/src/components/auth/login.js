import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUsingGoogle } from "../../actions/auth";

import googleIcon from "../../images/googleIcon.png";

class Login extends Component {
    onClickingGoogle = e => {
        console.log(this.props.loginUsingGoogle);
        this.props.loginUsingGoogle();
    };

    render() {
        return (
            <section className="loginSec">
                <div className="container">
                    <h1 className="sectionHeading">Login</h1>
                    <div
                        className="googleLoginButton"
                        onClick={this.onClickingGoogle}
                    >
                        <img src={googleIcon} alt="Google"></img>
                        <span>Sign in with Google</span>
                    </div>
                </div>
            </section>
        );
    }
}

Login.propTypes = {
    loginUsingGoogle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { loginUsingGoogle }
)(Login);
