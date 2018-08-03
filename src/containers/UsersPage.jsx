import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import UserService from '../services/UserService';
import ValidationUtilities from '../utils/ValidationUtilities';

const languages = [{ value: 'FRA', text: 'Francais' }, { value: 'ENG', text: 'English' }, { value: 'BIL', text: 'Bilingual' }];
const userTypes = [{ value: 'Instructor', text: 'Instructor' }, { value: 'Administrator', text: 'Administrator' }, { value: 'Super Administrator', text: 'Super Administrator' }];
const licenseTypes = [{ value: 'None', text: 'None' }, { value: 'G', text: 'G' }, { value: 'G1', text: 'G1' }, { value: 'G2', text: 'G2' }];


function onAfterInsertRow(row) {
  UserService.createUser(row).catch((error) => {
    alert(error);
  });
}

function onAfterSaveCell(row) {
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
  beforeSaveCell: onBeforeSaveCell,
  afterSaveCell: onAfterSaveCell,
};


const options = {
  afterInsertRow: onAfterInsertRow,
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

export default class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: [],
      showAll: false,
    };
    this.onToggleChange = this.onToggleChange.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
    this.tableRef.handleFilterData({ isActive: true });
  }

  onToggleChange(e) {
    if (e.target.checked) {
      this.tableRef.handleFilterData({ isActive: '' });
    } else {
      this.tableRef.handleFilterData({ isActive: true });
    }
  }

  getAllUsers() {
    UserService.getAllUsers().then((returnedUsers) => {
      this.setState({ filteredUsers: returnedUsers });
    }).catch((error) => {
      alert(error);
    });
  }

  render() {
    const languagesFormat = {
      FRA: 'Francais',
      ENG: 'English',
      BIL: 'Bilingual',
    };

    const licenseTypesFormat = {
      None: 'None',
      G: 'G',
      G1: 'G1',
      G2: 'G2',
    };

    const userTypesFormat = {
      Instructor: 'Instructor',
      Administrator: 'Administrator',
      'Super Administrator': 'Super Administrator',
    };

    return (
      <React.Fragment>
        <div>
          <h1>Users</h1>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="userShowInactiveCheckbox"><input type="checkbox" defaultChecked={this.state.showAll} id="userShowInactiveCheckbox" onChange={this.onToggleChange} /> Show inactive users</label>
          </div>
        </div>
        <br />
        <BootstrapTable
          data={this.state.filteredUsers}
          striped
          ref={(tableRef) => { this.tableRef = tableRef; }}
          hover
          condensed
          pagination
          insertRow
          cellEdit={cellEditProp}
          search
          options={options}
        >
          <TableHeaderColumn dataField="userId" isKey hidden hiddenOnInsert searchable={false} autoValue>Idb</TableHeaderColumn>
          <TableHeaderColumn dataField="username" dataSort editable={{ validator: ValidationUtilities.emptyValidator }}>User Name</TableHeaderColumn>
          <TableHeaderColumn dataField="password" dataSort hidden searchable={false} editable={{ validator: ValidationUtilities.emptyValidator }}>Password</TableHeaderColumn>
          <TableHeaderColumn dataField="firstName" dataSort editable={{ validator: ValidationUtilities.stringValidator }}>Surname</TableHeaderColumn>
          <TableHeaderColumn dataField="lastName" dataSort editable={{ validator: ValidationUtilities.stringValidator }}>Given Name</TableHeaderColumn>
          <TableHeaderColumn dataField="email" dataSort editable={{ validator: ValidationUtilities.emailValidator }}>Email</TableHeaderColumn>
          <TableHeaderColumn dataField="telephone" dataSort editable={{ validator: ValidationUtilities.phoneValidator }}>Telephone</TableHeaderColumn>
          <TableHeaderColumn dataField="dateOfBirth" dataSort editable={{ validator: ValidationUtilities.emptyValidator }}>Date of Birth</TableHeaderColumn>
          <TableHeaderColumn dataField="userType" dataSort dataFormat={enumFormatter} formatExtraData={userTypesFormat} editable={{ type: 'select', options: { values: userTypes, textKey: 'text', valueKey: 'value' } }}>User Type</TableHeaderColumn>
          <TableHeaderColumn dataField="language" dataSort dataFormat={enumFormatter} formatExtraData={languagesFormat} editable={{ name: 'language', type: 'select', options: { values: languages, textKey: 'text', valueKey: 'value' } }}>Language(s)</TableHeaderColumn>
          <TableHeaderColumn dataField="driversLicense" dataSort dataFormat={enumFormatter} formatExtraData={licenseTypesFormat} editable={{ type: 'select', options: { values: licenseTypes, textKey: 'text', valueKey: 'value' } }}>Driver License</TableHeaderColumn>
          <TableHeaderColumn dataField="isActive" dataSort editable={{ type: 'checkbox' }}>Is Active</TableHeaderColumn>
        </BootstrapTable>
      </React.Fragment>
    );
  }
}
