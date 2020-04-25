import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="text-center">
        <h1 class="h3 mb-3 font-weight-normal text-white">Register</h1>
        <p className="text-white">Already have an account? <Link to="/login">Log in</Link></p>
            <form noValidate onSubmit={this.onSubmit} className="form-signin">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className={classnames("form-control", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email" className="sr-only">Email</label>
                <span className="red-text">{errors.email}</span>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  placeholder="Password"
                  type="password"
                  className={classnames("form-control", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password" className="sr-only">Password</label>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign up
                </button>
            </form>
      </div >
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

{/* <Link to="/" className="btn-flat waves-effect">
<i className="material-icons left">keyboard_backspace</i> Back to
home
</Link>
<div className="col s12" style={{ paddingLeft: "11.250px" }}>
<h4>
  <b>Register</b> below
</h4>
<p className="grey-text text-darken-1">
  Already have an account? <Link to="/login">Log in</Link>
</p> */}