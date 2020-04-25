import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dashboard.css";
import Navbar from "../dropdown";
import axios from "axios";
import CheckInButton from "./checkInButton";
import InfectedButton from "./infectedButton";



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  state = {world: null};

  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`).then(res => {
      this.setState({ world: res.data });
    });
  }

  render() {
    const { user } = this.props.auth;

    console.log(this.state.world);

    return (
      <div style={{ height: "75vh" }} className="container bg-dark">
        <Navbar />
        <div className="row">
          <div className="landing-copy col s12 center-align">

            <h3 className="text-center text-white">
                COVID Tracker
            </h3>
            <div className="button">
              <div className="d-inline col s6">
                <CheckInButton {...user}/>
              </div>
              <div className="d-inline col s6">
                <InfectedButton {...user}/>
              </div>
            </div>
            <br></br>
            <div className="row bg-dark">
              <div className="col-sm-4">
                <div className="card text-white bg-primary mb-3 dataCards">
                  <div className="card-header text-center font-italic"> Confirmed </div>
                  <div className="card-body">
                    <p className="card-text text-center"> {this.state.world && this.state.world.Global.TotalConfirmed} </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card text-white bg-danger mb-3 dataCards">
                  <div className="card-header text-center font-italic"> Deaths </div>
                  <div className="card-body">
                    <p className="card-text text-center"> {this.state.world && this.state.world.Global.TotalDeaths} </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card text-white bg-success mb-3 dataCards">
                  <div className="card-header text-center font-italic"> Recovered </div>
                  <div className="card-body">
                    <p className="card-text text-center"> {this.state.world && this.state.world.Global.TotalRecovered} </p>
                  </div>
                </div>
              </div>
            </div>
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