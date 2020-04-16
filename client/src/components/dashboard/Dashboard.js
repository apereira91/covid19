import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dashboard.css";
import Navbar from "../dropdown";
import axios from "axios";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`).then(res => {
      console.log(res.data);
      this.setState({ world: res.data });
    });
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <p className="flow-text grey-text text-darken-1">
                You are logged into the Dashboard of {" "}
                <span style={{ fontFamily: "monospace" }}>CORONAVIRUS</span> tracker 👏
              </p>
            </h4>
            <div className="card text-white bg-primary mb-3 dataCards">
              <div className="card-header"> Confirmed </div>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card text-white bg-primary mb-3 dataCards">
              <div className="card-header"> Deaths </div>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card text-white bg-primary mb-3 dataCards">
              <div className="card-header"> Recovered </div>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <Navbar />
          </div>
        </div>
      </div>                                      
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);