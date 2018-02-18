import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { ButtonToolbar, Button } from 'react-bootstrap';


function buttonToolbarFormatter(cell, row) {
  return (
    <ButtonToolbar>
      <Button bsStyle="success">Edit</Button>
      <Button bsStyle="danger">Toggle status</Button>
    </ButtonToolbar>
  );
}


const columns = [
  {
    dataField: 'userName',
    text: 'User Name',
    sort: true,
  }, {
    dataField: 'type',
    text: 'Type',
    sort: true,
  }, {
    dataField: 'fullName',
    text: 'Full Name',
    sort: true,
  }, {
    dataField: 'language',
    text: 'Language',
    sort: true,
  }, {
    dataField: 'liscence',
    text: 'Driver Liscence',
    sort: true,
  }, {
    dataField: 'status',
    text: 'Status',
    sort: true,
  }, {
    dataField: 'button',
    text: '',
    formatter: buttonToolbarFormatter,
    sort: false,
  }, {
    dataField: 'id',
    text: 'ID',
    sort: true,
    hidden: true,
  },
];

const users = [
  {
    id: 0, userName: 'user0', type: 'Instructor', fullName: 'test0', status: 'Active', language: 'French', liscence: 'yes',
  }, {
    id: 1, userName: 'user1', type: 'Instructor', fullName: 'test1', status: 'Active', language: 'English', liscence: 'yes',
  }, {
    id: 2, userName: 'user2', type: 'Instructor', fullName: 'test2', status: 'Active', language: 'English', liscence: 'no',
  }, {
    id: 3, userName: 'user3', type: 'Instructor', fullName: 'test3', status: 'Inactive', language: 'English', liscence: 'yes',
  }, {
    id: 4, userName: 'user2', type: 'Instructor', fullName: 'test2', status: 'Active', language: 'English', liscence: 'no',
  }, {
    id: 5, userName: 'user3', type: 'Instructor', fullName: 'test3', status: 'Inactive', language: 'English', liscence: 'yes',
  }, {
    id: 6, userName: 'user2', type: 'Instructor', fullName: 'test2', status: 'Active', language: 'Bilingual', liscence: 'no',
  }, {
    id: 7, userName: 'user3', type: 'Instructor', fullName: 'test3', status: 'Inactive', language: 'Bilingual', liscence: 'yes',
  }, {
    id: 8, userName: 'user2', type: 'Instructor', fullName: 'test2', status: 'Active', language: 'French', liscence: 'yes',
  }, {
    id: 9, userName: 'user3', type: 'Instructor', fullName: 'test3', status: 'Inactive', language: 'Bilingual', liscence: 'no',
  }, {
    id: 10, userName: 'user3', type: 'Instructor', fullName: 'test3', status: 'Inactive', language: 'French', liscence: 'no',
  }, {
    id: 11, userName: 'user4', type: 'Admin', fullName: 'test4', status: 'Active', language: 'French', liscence: 'no',
  }];

function indication() {
  return 'No Data';
}

var filter = '';
var showInactive = false;

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

  onAddButtonClick() {
    // open add user
  }

  filterUsers() {
    this.filteredUsers = [];
    for (var i = 0; i < users.length; i++) {
      const userName = users[i].userName.toLowerCase();
      const fullName = users[i].fullName.toLowerCase();
      const status = users[i].status.toLowerCase();
      if (userName.includes(filter.toLowerCase()) || fullName.includes(filter.toLowerCase())) {
        if (showInactive || status === 'active') {
          this.filteredUsers.push(users[i]);
        }
      }
    }
    this.setState({ filteredUsers: this.filteredUsers });
  }

  handleInputChange(event) {
    const target = event.target;
    if (target.type === 'checkbox') {
      showInactive = target.checked;
    }

    if (target.type === 'text') {
      filter = event.target.value;
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
          <div className="col-md-4">
            <input className="form-control" type="text" placeholder="Filter Users..." id="userSearch" onChange={this.handleInputChange} />
          </div>
          <div className="col-md-4" />
          <div className="col-md-4">
            <label><input type="checkbox" defaultChecked={showInactive} id="userShowInactiveCheckbox" onChange={this.handleInputChange} /> Show inactive users</label>
          </div>
        </div>
        <br />
        <BootstrapTable
          keyField="id"
          data={this.filteredUsers}
          columns={columns}
          striped
          hover
          condensed
          noDataIndication={indication()}
        />
        <button className="btn btn-primary" onClick={this.onAddButtonClick}>Add User</button>
      </React.Fragment>
    );
  }
}
