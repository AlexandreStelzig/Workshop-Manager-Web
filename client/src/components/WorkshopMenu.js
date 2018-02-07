import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WorkshopMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Workshops</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
             <Link className="nav-link" to="/registrations">Registration</Link>              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">Calendar</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/workshops">Workshops</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn my-2 my-sm-0" type="submit">Logout</button>
          </form>
        </div>
      </nav>
    );
  }
}



