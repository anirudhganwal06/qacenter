import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setCurrentUser } from "../../actions/auth";

class Dashboard extends Component {
    componentDidMount() {
        this.props.setCurrentUser();

        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        const user = this.props.auth.user;
        return (
            <div>
                <h1>Hi {user.name}</h1>
            </div>
        );
    }
}

Dashboard.propTypes = {
    setCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    setCurrentUser
})(Dashboard);
