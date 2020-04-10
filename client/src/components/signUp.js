import React from "react";

const SignUp = () => (
    <div className="container">
      <form>
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
        <button type="submit" className="btn btn-danger">
          Sign Up
        </button>
      </form>
    </div>
  );
  
  export default SignUp;
