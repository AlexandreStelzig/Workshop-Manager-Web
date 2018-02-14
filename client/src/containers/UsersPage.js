import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {ButtonToolbar, Button} from 'react-bootstrap';

function buttonToolbarFormatter(cell, row) {
  return (
    <ButtonToolbar>
      <Button bsStyle='success'>Edit</Button>
      <Button bsStyle='danger'>Remove</Button>
    </ButtonToolbar>
  );
}

const columns = [
  {
    dataField: 'user',
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
    dataField: 'status',
    text: 'Status',
    sort: true,
  }, {
    dataField: 'button',
    text: 'BUTTONS',
    formatter: buttonToolbarFormatter,
  }, {
    dataField: 'id',
    text: 'ID',
    sort: true,
    hidden: true,
  },
];

const users = [
  {
    id: 0, user: 'user0', type: 'Instructor', fullName: 'test0', status: 'Active', button: 'test',
  }, {
    id: 1, user: 'user1', type: 'Instructor', fullName: 'test1', status: 'Active',
  }, {
    id: 2, user: 'user2', type: 'Instructor', fullName: 'test2', status: 'Active',
  }, {
    id: 3, user: 'user3', type: 'Instructor', fullName: 'test3', status: 'Inactive',
  }, {
    id: 4, user: 'user3', type: 'Instructor', fullName: 'test3', status: 'Inactive',
  }, {
    id: 5, user: 'user4', type: 'Admin', fullName: 'test4', status: 'Active',
  }];

function indication() {
  return 'No Data';
}


export default class UsersPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Users</h1>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <input className="form-control" type="text" placeholder="Filter users..." />
          </div>
          <div className="col-md-4" />
          <div className="col-md-4">
            <label><input type="checkbox" name="checkbox" value="value" /> Show disabled users</label>
          </div>
        </div>
        <br />
        <BootstrapTable
          keyField="id"
          data={users}
          columns={columns}
          striped
          cellEdit={cellEditFactory({ mode: 'click' })}
          hover
          condensed
          noDataIndication={indication()}
        />
        <button className="btn btn-primary">Add User</button>
      </React.Fragment>
    );
  }
}
