import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorkshopMenu from './components/WorkshopMenu';
import RegistrationsPage from './containers/RegistrationsPage';
import CalendarPage from './containers/CalendarPage';
import SettingsPage from './containers/SettingsPage';
import UsersPage from './containers/UsersPage';
import ResourcesPage from './containers/ResourcesPage';
import WorkshopsPage from './containers/WorkshopsPage';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class App extends Component {

  constructor() {
    super();
    this.state ={
      name: ""
    };
  }

  componentDidMount() {
    fetch('/api/name')
      .then(res => res.json())
      .then(name => this.setState({name}));
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <WorkshopMenu/>
          <div className="content">
            <Route exact path="/registrations" component={RegistrationsPage} />
            <Route exact path="/calendar" component={CalendarPage} />        
            <Route exact path="/resources" component={ResourcesPage} />
            <Route exact path="/workshops" component={WorkshopsPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/settings" component={SettingsPage} />          
          </div>                    
        </React.Fragment>
      </BrowserRouter>
    );
  }
}