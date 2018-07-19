import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import UserService from '../services/UserService';

const Languages = ['Français', 'English', 'Bilingual'];
const userTypes = ['Instructor', 'Administrator', 'Super Administrator'];
const licenseTypes = ['None', 'G', 'G2'];
const statusTypes = ['Active', 'Inactive'];

let users = [

];

function onAfterInsertRow(row) {
  UserService.createUser(row).then((returnValue) => {

  }).catch((error) => {
    // alert(error);
  });
}

const options = {
  afterInsertRow: onAfterInsertRow  // A hook for after insert rows
};

function onAfterSaveCell(row, cellName, cellValue) {
  UserService.updateUser(row).then((returnValue) => {
    if (!returnValue) {
      alert('Error while updating');
    }
  }).catch((error) => {
    alert(error);
  });
}

function onBeforeSaveCell(row, cellName, cellValue) {
  // You can do any validation on here for editing value,
  // return false for reject the editing
  if (!cellValue) {
    return false;
  }

  return true;
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
  afterSaveCell: onAfterSaveCell, // a hook for after saving cell
};

function stringValidator(value) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  }

  return response;
}

function emptyValidator(value) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  }

  return response;
}

function emailValidator(value) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailIsValid = re.test(String(value).toLowerCase());

  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (!emailIsValid) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be an email';
    response.notification.title = 'Invalid Value';
  }

  return response;
}

function phoneValidator(value) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var phoneIsValid = re.test(String(value).toLowerCase());

  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (!phoneIsValid) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be a phone number';
    response.notification.title = 'Invalid Value';
  }

  return response;
}

export default class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: users,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.getAllUsers();
  }

  getAllUsers() {
    UserService.getAllUsers().then((returnedUsers) => {
      users = returnedUsers;
      this.filterUsers();
    }).catch((error) => {
      // alert(error);
    });
  }

  filterUsers() {
    this.filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
      // const status = users[i].status.toLowerCase();
      // if (this.state.showInactive || status === 'active') {
      this.filteredUsers.push(users[i]);
      // }
    }

    this.setState({ filteredUsers: this.filteredUsers });
  }

  handleInputChange(event) {
    const target = event.target;
    if (target.type === 'checkbox') {
      this.state.showInactive = target.checked;
    }

    this.filterUsers();
  }


  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Users</h1>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <label><input type="checkbox" defaultChecked={this.state.showInactive} id="userShowInactiveCheckbox" onChange={this.handleInputChange} /> Show inactive users</label>
          </div>
        </div>
        <br />
        <BootstrapTable
          data={this.filteredUsers}
          striped
          hover
          condensed
          pagination
          insertRow
          cellEdit={cellEditProp}
          search
          options={options}
        >
          <TableHeaderColumn dataField="userId" isKey hidden hiddenOnInsert searchable={false} autoValue>Idb</TableHeaderColumn>
          <TableHeaderColumn dataField="username" dataSort editable={{ validator: emptyValidator }}>User Name</TableHeaderColumn>
          <TableHeaderColumn dataField="password" dataSort hidden searchable={false} editable={{ validator: emptyValidator }}>Password</TableHeaderColumn>
          <TableHeaderColumn dataField="firstName" dataSort editable={{ validator: stringValidator }}>Surname</TableHeaderColumn>
          <TableHeaderColumn dataField="lastName" dataSort editable={{ validator: stringValidator }}>Given Name</TableHeaderColumn>
          <TableHeaderColumn dataField="email" dataSort editable={{ validator: emailValidator }}>Email</TableHeaderColumn>
          <TableHeaderColumn dataField="telephone" dataSort editable={{ validator: phoneValidator }}>Telephone</TableHeaderColumn>
          <TableHeaderColumn dataField="dateOfBirth" dataSort editable={{ validator: emptyValidator }}>Date of Birth</TableHeaderColumn>
          <TableHeaderColumn dataField="userType" dataSort editable={{ type: 'select', options: { values: userTypes } }}>User Type</TableHeaderColumn>
          <TableHeaderColumn dataField="language" dataSort editable={{ name: 'language', type: 'select', options: { values: Languages } }}>Language(s)</TableHeaderColumn>
          <TableHeaderColumn dataField="driversLicense" dataSort editable={{ type: 'select', options: { values: licenseTypes } }}>Driver License</TableHeaderColumn>
          <TableHeaderColumn dataField="status" dataSort editable={{ type: 'select', options: { values: statusTypes } }}>Status</TableHeaderColumn>
        </BootstrapTable>
      </React.Fragment>
    );
  }
}
