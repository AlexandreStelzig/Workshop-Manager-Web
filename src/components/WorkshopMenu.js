import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class WorkshopMenu extends Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" href="/">Workshops</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavLink to="/registrations">
              Registrations
            </NavLink>
            <NavLink to="/calendar">
              Calendar
            </NavLink>
            <NavLink to="/resources">
              Resources
            </NavLink>
            <NavLink to="/workshops">
              Workshops
            </NavLink>
            <NavLink to="/users">
              Users
            </NavLink>
            <NavLink to="/settings">
              Settings
            </NavLink>
          </Nav>
          <Nav pullRight>
            <li>
              <FormControl type="text" placeholder="Search" />
            </li>
            <Button type="submit" onClick={this.props.onLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const NavLink = ({ to, eventKey, children }) => (
  <LinkContainer to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>);

WorkshopMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default withRouter(WorkshopMenu);
