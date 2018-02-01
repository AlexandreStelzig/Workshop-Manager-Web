import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

export default class WorkshopMenu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Workshops</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
             <Link class="nav-link" to="/registrations">Registration</Link>              
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/calendar">Calendar</Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/resources">Resources</Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/workshops">Workshops</Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/users">Users</Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/settings">Settings</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn my-2 my-sm-0" type="submit">Logout</button>
          </form>
        </div>
      </nav>
    );
  }
}



