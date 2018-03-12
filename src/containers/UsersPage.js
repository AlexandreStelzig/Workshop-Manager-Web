import React, { Component } from 'react';
import { BootstrapTable } from 'react-bootstrap-table';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Modal from 'react-modal';

const languageTypes = ['English', 'French', 'Bilingual']
const userTypes = ['Instructor', 'Admin', 'Super Admin']
const liscenceTypes = ['yes', 'no']
const statusTypes = ['Active', 'Inactive']

function buttonToolbarFormatter(cell, row) {
  return (
    <ButtonToolbar>
      <Button bsStyle="success">Edit</Button>
      <Button bsStyle="danger">Toggle status</Button>
    </ButtonToolbar>
  );
}


const users = [
  {
    id: 0, userName: 'user0', type: 'Instructor', fullName: 'Reene Pauleen', status: 'Active', language: 'French', liscence: 'yes',
  }, {
    id: 1, userName: 'user1', type: 'Instructor', fullName: 'Talon Ian', status: 'Active', language: 'English', liscence: 'yes',
  }, {
    id: 2, userName: 'user2', type: 'Instructor', fullName: 'Savanna Vinnie', status: 'Active', language: 'English', liscence: 'no',
  }, {
    id: 3, userName: 'user3', type: 'Instructor', fullName: 'Sebastian Jem', status: 'Inactive', language: 'English', liscence: 'yes',
  }, {
    id: 4, userName: 'user2', type: 'Instructor', fullName: 'Lizzie Brendon', status: 'Active', language: 'English', liscence: 'no',
  }, {
    id: 5, userName: 'user3', type: 'Instructor', fullName: 'Domenic Joni', status: 'Inactive', language: 'English', liscence: 'yes',
  }, {
    id: 6, userName: 'user2', type: 'Instructor', fullName: 'Dane Lizzy', status: 'Active', language: 'Bilingual', liscence: 'no',
  }, {
    id: 7, userName: 'user3', type: 'Instructor', fullName: 'Jared Fredrick', status: 'Inactive', language: 'Bilingual', liscence: 'yes',
  }, {
    id: 8, userName: 'user2', type: 'Instructor', fullName: 'Laz Rozanne', status: 'Active', language: 'French', liscence: 'yes',
  }, {
    id: 9, userName: 'user3', type: 'Instructor', fullName: 'Laurelle Eugene', status: 'Inactive', language: 'Bilingual', liscence: 'no',
  }, {
    id: 10, userName: 'user3', type: 'Instructor', fullName: 'Jerrie Christobel', status: 'Inactive', language: 'French', liscence: 'no',
  }, {
    id: 11, userName: 'user4', type: 'Admin', fullName: 'Sunshine Jonette', status: 'Active', language: 'French', liscence: 'no',
  }
  ];

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

export default class UsersPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: users,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.filterUsers();
  }


  filterUsers() {
    this.filteredUsers = [];
    for (var i = 0; i < users.length; i++) {
      const userName = users[i].userName.toLowerCase();
      const fullName = users[i].fullName.toLowerCase();
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
          cellEdit={ cellEditProp }
          search>
          <TableHeaderColumn dataField="id" isKey hidden>Idb</TableHeaderColumn>
          <TableHeaderColumn dataField="userName" dataSort>User Name</TableHeaderColumn>
          <TableHeaderColumn dataField="fullName" dataSort>Full Name</TableHeaderColumn>
          <TableHeaderColumn dataField="type" dataSort dataSort editable={ { type: 'select', options: { values: userTypes } } }>User Type</TableHeaderColumn>
          <TableHeaderColumn dataField="language" dataSort editable={ { type: 'select', options: { values: languageTypes } } }>Language(s)</TableHeaderColumn>
          <TableHeaderColumn dataField="liscence" dataSort editable={ { type: 'select', options: { values: liscenceTypes } } }>Liscence</TableHeaderColumn>
          <TableHeaderColumn dataField="status" dataSort editable={ { type: 'select', options: { values: statusTypes } } }>Status</TableHeaderColumn>
        </BootstrapTable>
      </React.Fragment>
    );
  }
}
