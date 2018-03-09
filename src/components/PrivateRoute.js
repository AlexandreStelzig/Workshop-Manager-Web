import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = AuthService.getIsLoggedIn();

  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to="/login" />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
