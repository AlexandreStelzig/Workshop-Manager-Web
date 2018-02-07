import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>You are logged out. Click the button to login.</p>
        <button onClick={this.props.onLogin}>
          Log in
        </button>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
