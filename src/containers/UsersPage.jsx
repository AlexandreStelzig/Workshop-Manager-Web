import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import UserService from '../services/UserService';

const languageTypes = ['English', 'French', 'Bilingual'];
const userTypes = ['Instructor', 'Administrator', 'Super Administrator'];
const licenseTypes = ['None', 'G', 'G2'];
const statusTypes = ['Active', 'Inactive'];

var users = [
  // {
  //   id: 0, userName: 'awalker', type: 'Administrator', fullName: 'Allen Walker', status: 'Active', language: 'Bilingual', license: 'G2',
  // }, {
  //   id: 1, userName: 'llee', type: 'Instructor', fullName: 'Lenalee Lee', status: 'Active', language: 'English', license: 'G',
  // }, {
  //   id: 2, userName: 'ykanda', type: 'Super Administrator', fullName: 'Yu Kanda', status: 'Active', language: 'French', license: 'None',
  // },
];

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
};

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
      alert(error);
    });
  }

  filterUsers() {
    this.filteredUsers = [];

    for (let i = 0; i < users.length; i++) {
      const status = users[i].status.toLowerCase();
      if (this.state.showInactive || status === 'active') {
        this.filteredUsers.push(users[i]);
      }
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
        >
          <TableHeaderColumn dataField="userid" isKey hidden hiddenOnInsert searchable={false} autoValue>Idb</TableHeaderColumn>
          <TableHeaderColumn dataField="username" dataSort>User Name</TableHeaderColumn>
          <TableHeaderColumn dataField="password" dataSort hidden searchable={false}>Password</TableHeaderColumn>
          <TableHeaderColumn dataField="firstName" dataSort>Surname</TableHeaderColumn>
          <TableHeaderColumn dataField="lastName" dataSort>Given Name</TableHeaderColumn>
          <TableHeaderColumn dataField="email" dataSort>Email</TableHeaderColumn>
          <TableHeaderColumn dataField="telephone" dataSort>Telephone</TableHeaderColumn>
          <TableHeaderColumn dataField="dateOfBirth" dataSort>Date of Birth</TableHeaderColumn>
          <TableHeaderColumn dataField="userType" dataSort editable={{ type: 'select', options: { values: userTypes } }}>User Type</TableHeaderColumn>
          <TableHeaderColumn dataField="language" dataSort editable={{ type: 'select', options: { values: languageTypes } }}>Language(s)</TableHeaderColumn>
          <TableHeaderColumn dataField="license" dataSort editable={{ type: 'select', options: { values: licenseTypes } }}>Driver License</TableHeaderColumn>
          <TableHeaderColumn dataField="status" dataSort editable={{ type: 'select', options: { values: statusTypes } }}>Status</TableHeaderColumn>
        </BootstrapTable>
      </React.Fragment>
    );
  }
}
