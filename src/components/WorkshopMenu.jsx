import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, FormControl, DropdownButton, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const WorkshopMenu = ({ onLogout }) => (
  <Navbar fluid inverse collapseOnSelect>
    <div className="container">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" href="/">Workshops</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavLink to="/registrations" eventKey={1}>
            Registrations
          </NavLink>
          <NavLink to="/calendar" eventKey={2}>
            Calendar
          </NavLink>
          <NavLink to="/resources" eventKey={3}>
            Resources
          </NavLink>
          <NavLink to="/workshops" eventKey={4}>
            Workshops
          </NavLink>
          <NavLink to="/users" eventKey={5}>
            Users
          </NavLink>
          <NavLink to="/settings" eventKey={6}>
            Settings
          </NavLink>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            title={
              <span><i className="glyphicon glyphicon-user" /></span>
            }
            id="basic-nav-dropdown"
          >
            <DropdownButton title="Year" id="dropdown-size-medium">
              <MenuItem >2018</MenuItem>
              <MenuItem >2017</MenuItem>
              <MenuItem >2016</MenuItem>
            </DropdownButton>
            <MenuItem >Action</MenuItem>
            <MenuItem >Another action</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={onLogout}>
              <span className="glyphicon glyphicon-log-out" /> Logout
            </MenuItem>
          </NavDropdown>
        </Nav>
        <Navbar.Form pullRight>
          <div>
            <FormControl type="text" placeholder="Search" />
          </div>
        </Navbar.Form>
      </Navbar.Collapse>
    </div>
  </Navbar>
);
WorkshopMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
export default withRouter(WorkshopMenu);

const NavLink = ({ to, eventKey, children }) => (
  <LinkContainer to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>
);
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  eventKey: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};
