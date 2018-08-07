import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import WorkshopMenu from './components/WorkshopMenu';
import PrivateRoute from './components/PrivateRoute';
import RegistrationsPage from './containers/RegistrationsPage';
import RegistrationDetailPage from './containers/RegistrationDetailPage';
import CalendarPage from './containers/CalendarPage';
import SettingsPage from './containers/SettingsPage';
import UsersPage from './containers/UsersPage';
import ResourcesPage from './containers/ResourcesPage';
import WorkshopsPage from './containers/WorkshopsPage';
import LoginPage from './containers/LoginPage';
import RegistrationForm from './containers/RegistrationForm';
import AuthService from './services/AuthService';
import History from './utils/History';


const DivBackground = styled.div`
  background: linear-gradient(0.25turn, #01Addf, #ebf8e1, #ff9900);
  min-height: 100%;
  padding-bottom: 50px;

`;
const DivCentral = styled.div`
  background-color: #FFF;
`;

export default class App extends Component {
  constructor() {
    super();
    const isLoggedIn = AuthService.getIsLoggedIn();
    this.state = { isLoggedIn };
    this.onLogout = this.onLogout.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogout() {
    AuthService.logout();
    this.setState({ isLoggedIn: false });
  }

  onLogin(username, password) {
    AuthService.validateCredentials(username, password).then((successful) => {
      if (successful) {
        AuthService.login();
        History.push('/');
        this.setState({ isLoggedIn: true });
      } else {
        // wrong username or password - alert is temporary
        alert('wrong username or password');
      }
    }).catch((error) => {
      // not connected to server - temp for now
      alert(error);
    });
  }

  render() {
    return (
      <Router history={History}>
        <React.Fragment>
          <DivBackground>
            {this.state.isLoggedIn && <WorkshopMenu onLogout={this.onLogout} />}
            <DivCentral className="container content">
              <PrivateRoute exact path="/" component={RegistrationsPage} />
              <Route exact path="/login" render={() => <LoginPage onLogin={this.onLogin} />} />
              <PrivateRoute exact path="/registrations" component={RegistrationsPage} />
              <PrivateRoute exact path="/registrationDetail/:id" component={RegistrationDetailPage} />
              <PrivateRoute exact path="/calendar" component={CalendarPage} />
              <PrivateRoute exact path="/resources" component={ResourcesPage} />
              <PrivateRoute exact path="/workshops" component={WorkshopsPage} />
              <PrivateRoute exact path="/users" component={UsersPage} />
              <PrivateRoute exact path="/settings" component={SettingsPage} />
              <PrivateRoute exact path="/register" component={RegistrationForm} />
            </DivCentral>
          </DivBackground>
        </React.Fragment>
      </Router>
    );
  }
}
