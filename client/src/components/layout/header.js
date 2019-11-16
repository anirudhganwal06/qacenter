import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

class Header extends Component {
    onLogout = e => {
        console.log("Logging out");
        this.props.logout();
    };

    render() {
        const guestLinks = (
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        );

        const authLinks = (
            <ul>
                <li>
                    <span>
                        <img
                            className="navbarProfileImg rounded-circle"
                            src={this.props.auth.user.photoUrl}
                            alt="profile"
                        />
                    </span>
                </li>
                <li>
                    <span onClick={this.onLogout}>Logout</span>
                </li>
            </ul>
        );

        return (
            <header>
                <nav className="container">
                    <span>
                        <Link to="/">QACenter</Link>
                    </span>
                    {this.props.auth.isAuthenticated ? authLinks : guestLinks}
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(Header);
