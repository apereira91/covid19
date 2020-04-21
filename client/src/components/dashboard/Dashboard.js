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
  
  state = {world: null};

  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`).then(res => {
      console.log(res.data);
      this.setState({ world: res.data }, console.log(this.state));
      console.log(this.state.world.Global.TotalConfirmed);
    });
  }

  render() {
    const { user } = this.props.auth;

    console.log(this.state.world);

    return (
      <div style={{ height: "75vh" }} className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <p className="flow-text grey-text text-darken-1">
                You are logged into the Dashboard of {" "}
                <span style={{ fontFamily: "monospace" }}>CORONAVIRUS</span> tracker 👏
              </p>
            </h4>
            <div className="row">
              <div className="col-sm-4">
                <div className="card text-white bg-primary mb-3 dataCards">
                  <div className="card-header"> Confirmed </div>
                  <div className="card-body">
                    <p className="card-text"> {this.state.world && this.state.world.Global.TotalConfirmed} </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card text-white bg-danger mb-3 dataCards">
                  <div className="card-header"> Deaths </div>
                  <div className="card-body">
                    <p className="card-text"> {this.state.world && this.state.world.Global.TotalDeaths} </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card text-white bg-success mb-3 dataCards">
                  <div className="card-header"> Recovered </div>
                  <div className="card-body">
                    <p className="card-text"> {this.state.world && this.state.world.Global.TotalRecovered} </p>
                  </div>
                </div>
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