import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

function dropdown() {
    return (
        <div className="dropdown">
            <a className="btn btn-primary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dashboard </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/symptoms">Symptoms</a>
                    <a className="dropdown-item" href="/checkins">Check-Ins</a>
                    <a className="dropdown-item" href="/logout">Logout</a>
                </div>
        </div>
    )
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
