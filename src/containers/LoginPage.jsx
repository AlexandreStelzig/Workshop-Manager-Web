import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

export default class LoginPage extends Component {
  click() {
    const username = this.textbox.value;
    const password = this.textbox.value;

    this.props.onLogin(username, password);
  }

  render() {
    return (
      <div className="LoginContainer">
        <h1>Login</h1>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="form-group text-center">
          <label htmlFor="remember">
            <input type="checkbox" className="" name="remember" id="remember" />
            Remember Me
          </label>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <button className="form-control btn btn-primary" onClick={this.props.onLogin}>
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <a href="/" className="forgot-password">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
