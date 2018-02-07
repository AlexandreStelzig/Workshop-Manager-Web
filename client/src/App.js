import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import WorkshopMenu from './components/WorkshopMenu';
import PrivateRoute from './components/PrivateRoute';
import RegistrationsPage from './containers/RegistrationsPage';
import CalendarPage from './containers/CalendarPage';
import SettingsPage from './containers/SettingsPage';
import UsersPage from './containers/UsersPage';
import ResourcesPage from './containers/ResourcesPage';
import WorkshopsPage from './containers/WorkshopsPage';
import LoginPage from './containers/LoginPage';
import AuthService from './services/AuthService';
import History from './utils/History';


export default class App extends Component {
  constructor() {
    super();
    const isLoggedIn = AuthService.getIsLoggedIn();
    this.state = { isLoggedIn };
    this.onLogout = this.onLogout.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogout() {
    AuthService.setIsLoggedIn(false);
    this.setState({ isLoggedIn: false });
  }

  onLogin() {
    AuthService.setIsLoggedIn(true);
    History.push('/');
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <Router history={History}>
        <React.Fragment>
          {this.state.isLoggedIn && <WorkshopMenu onLogout={this.onLogout} />}
          <div className="content">
            <PrivateRoute exact path="/" component={RegistrationsPage} />
            <Route exact path="/login" render={() => <LoginPage onLogin={this.onLogin} />} />
            <PrivateRoute exact path="/registrations" component={RegistrationsPage} />
            <PrivateRoute exact path="/calendar" component={CalendarPage} />
            <PrivateRoute exact path="/resources" component={ResourcesPage} />
            <PrivateRoute exact path="/workshops" component={WorkshopsPage} />
            <PrivateRoute exact path="/users" component={UsersPage} />
            <PrivateRoute exact path="/settings" component={SettingsPage} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
