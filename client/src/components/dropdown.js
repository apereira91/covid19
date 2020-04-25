import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class dropdown extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-dark nav justify-content-end">
                    <form className="form-inline">
                        <button className="btn btn-outline-primary" type="button" href="/logout" onClick={this.onLogoutClick}>Logout</button>
                    </form>
                </nav>
            </div>
        )
    }
}

dropdown.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(dropdown);
