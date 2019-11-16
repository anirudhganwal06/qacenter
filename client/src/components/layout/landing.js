import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setCurrentUser } from "../../actions/auth";

class Landing extends Component {
    componentDidMount() {
        // await this.props.setCurrentUser();
        console.log(this.props.auth);
        if (this.props.auth.isAuthenticated) {
            this.props.history.push(
                "/user/" + this.props.auth.user._id + "/dashboard"
            );
        }
    }
    render() {
        return (
            <div>
                <h1>This is the landing page!</h1>
            </div>
        );
    }
}

Landing.propTypes = {
    setCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setCurrentUser })(Landing);
