import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
     <div className="text-center">
       <h1 class="h3 mb-3 font-weight-normal text-white">Sign In</h1>
        <p className="text-white">Don't have an account? <Link to="/register">Register</Link></p>
            <form noValidate onSubmit={this.onSubmit} className="form-signin">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className={classnames("form-control", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email" className="sr-only">Email address</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password" className="sr-only">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Login
                </button>
            </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

{/* <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
                
              </p>
              <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link> */}