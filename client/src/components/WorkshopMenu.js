import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class WorkshopMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Workshops</a>
        <button 
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/registrations" to="/registrations">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/calendar" to="/calendar">Calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/resources" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/workshops" to="/workshops">Workshops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/users" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/settings" to="/settings">Settings</Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn my-2 my-sm-0" onClick={this.props.onLogout}>Logout</button>
          </div>
        </div>
      </nav>
    );
  }
}

WorkshopMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default withRouter(WorkshopMenu);
