import React from "react";
import '../styles/signIn.css';

const SignIn = () => (
  <div className="container">
    <form>
      <h4>Member Login</h4>
      <div className="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
        />
      </div>
      <div className="buttons">
          <button type="submit" className="btn btn-danger button1">
        Sign up
        </button>
        <button type="submit" className="btn btn-danger button2">
        Sign In
        </button>
      </div>
    </form>
  </div>
);

export default SignIn;