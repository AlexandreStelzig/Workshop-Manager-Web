import React, { Component } from 'react';
// import BootstrapTable from 'react-bootstrap-table-next';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Modal from 'react-modal';


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
    dataField: 'fullName',
    text: 'Full Name',
    sort: true,
  }, {
    dataField: 'type',
    text: 'Type',
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
  }];

function indication() {
  return 'No Data';
}


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class UsersPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: users,
      showingModal: false,
      showInactive: false,
      filter: '',
      userUserName: '',
      userType: 'Instructor',
      userFullName: '',
      userLanguage: 'English',
      userDriverLiscence: 'yes',
      userStatus: 'Active',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleModalInputChange = this.handleModalInputChange.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addUser = this.addUser.bind(this);
    this.filterUsers();
  }

  openModal = () => this.setState({showingModal: true})
  closeModal = () => this.setState({showingModal: false})

  addUser() {
    var newUser = {
      id: 0, 
      userName: this.state.userUserName, 
      type: this.state.userType, 
      fullName: this.state.userFullName, 
      status: 'Active',
      language: this.state.userLanguage,
      liscence: this.state.userDriverLiscence,
    }
    console.log(newUser);

    users.push(newUser);
    this.setState({
      showingModal: false,
      userUserName: '',
      userType: 'Instructor',
      userFullName: '',
      userLanguage: 'English',
      userDriverLiscence: 'yes',
      userStatus: 'Active',
    });
    this.filterUsers();
  }

  filterUsers() {
    this.filteredUsers = [];
    for (var i = 0; i < users.length; i++) {
      const userName = users[i].userName.toLowerCase();
      const fullName = users[i].fullName.toLowerCase();
      const status = users[i].status.toLowerCase();
      if (userName.includes(this.state.filter.toLowerCase()) || fullName.includes(this.state.filter.toLowerCase())) {
        if (this.state.showInactive || status === 'active') {
          this.filteredUsers.push(users[i]);
        }
      }
    }
    this.setState({ filteredUsers: this.filteredUsers });
  }

  handleInputChange(event) {
    const target = event.target;
    if (target.type === 'checkbox') {
      this.state.showInactive = target.checked;
    }

    if (target.type === 'text') {
      this.state.filter = event.target.value;
    }

    this.filterUsers();
  }

  handleModalInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
            <label><input type="checkbox" defaultChecked={this.state.showInactive} id="userShowInactiveCheckbox" onChange={this.handleInputChange} /> Show inactive users</label>
          </div>
        </div>
        <br />
        {/*<BootstrapTable
          keyField="id"
          data={this.filteredUsers}
          columns={columns}
          striped
          hover
          condensed
          noDataIndication={indication()}
        />*/}
        <Modal
              isOpen={this.state.showingModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Test"
            >
            <form>
              <h5>User Name:</h5>
              <input
                name='userUserName'
                type='text'
                value={this.state.resourceName}
                onChange={this.handleModalInputChange}
              />
              <br/>
              <h5>Full Name:</h5>
              <input
                name='userFullName'
                type='text'
                value={this.state.resourceName}
                onChange={this.handleModalInputChange}
              />
              <br/>
              <h5>Type:</h5>
              <select
                name='userType'
                value={this.state.resourceCat}
                onChange={this.handleModalInputChange}
              >
                <option value='Instructor'>Instructor</option>
                <option value='Admin'>Admin</option>
              </select>
              <br/>
              <h5>Language(s):</h5>
              <select
                name='userLanguage'
                value={this.state.resourceCat}
                onChange={this.handleModalInputChange}
              >
                <option value='English'>English</option>
                <option value='French'>French</option>
                <option value='Bilingual'>Bilingual</option>
              </select>
              <br/>
              <h5>Driver Liscence:</h5>
              <select
                name='userDriverLiscence'
                value={this.state.resourceCat}
                onChange={this.handleModalInputChange}
              >
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
              <br/>
              <br/>
              <ButtonToolbar>
                <Button bsStyle='primary' onClick={this.addUser}>Save</Button>
                <Button bsStyle='danger' onClick={this.closeModal}>Cancel</Button>
              </ButtonToolbar>
            </form>
          </Modal>
        <button className="btn btn-primary" onClick={this.openModal}>Add User</button>
      </React.Fragment>
    );
  }
}
