import React, { Component, PropTypes} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import {ButtonToolbar, Button} from 'react-bootstrap';
import Modal from 'react-modal';

function buttonToolbarFormatter(cell, row){
  return (
    <ButtonToolbar>
      <Button bsStyle='success'>Edit</Button>
      <Button bsStyle='danger'>Remove</Button>
    </ButtonToolbar>
  );
}

const columns = [
  {
    dataField: 'name',
    text: 'Name',
    sort: true
  }, {
    dataField: 'category',
    text: 'Category',
    sort: true
  }, {
    dataField: 'quantity',
    text: 'Quantity',
    sort: true
  }, {
    dataField: 'doubleBooking',
    text: 'Double Booking',
    sort: true
  }, {
    dataField: 'notes',
    text: 'Notes',
    sort: false
  }, {
    dataField: 'id',
    text: 'ID',
    sort: true,
    hidden: true
  }, {
    dataField: 'buttons', //This column will have a button toolbar
    text: '',
    formatter: buttonToolbarFormatter,
    sort: false
  }
];

const testResources = [
  {
    id: 0, name: 'TestName', category: 'TestCategory', quantity: 1, doubleBooking: 'No', notes: 'I am a test'
  },
  {
    id: 1, name: 'AnotherTest', category: 'NewCat', quantity: 3, doubleBooking: 'Yes', notes: ''
  }
];

var filter = '';

//var filteredTestResources = testResources;

const pagination = {
  paginationSize: 1,
  hideSizePerPage: true
};

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

export default class ResourcesPage extends Component {
  filteredTestResources = testResources;
  showingModal = false;
  constructor(props) {
    super(props);
    this.state = {
      filteredTestResources: testResources,
      showingModal: false,
      resourceName: '',
      resourceCat: '',
      resourceQuantity: 0,
      resourceDoubleBook: false,
      resourceNotes: '',
    };
    this.filterResources = this.filterResources.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addResource = this.addResource.bind(this);
  }  

  filterResources(event) {
    filter = event.target.value;
    this.filteredTestResources = [];
    for(var i = 0; i < testResources.length; i++) {
      var name = testResources[i].name.toLowerCase();
      var category = testResources[i].category.toLowerCase();
      if(name.includes(filter.toLowerCase()) || category.includes(filter.toLowerCase())) {
        this.filteredTestResources.push(testResources[i]);
      }
    }
    this.setState({filteredTestResources: this.filteredTestResources});
  }

  openModal = () => this.setState({showingModal: true})
  closeModal = () => this.setState({showingModal: false})

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addResource() {
    var newResource = {
      id: 0, 
      name: this.state.resourceName, 
      category: this.state.resourceCat, 
      quantity: this.state.resourceQuantity, 
      doubleBooking: this.state.resourceDoubleBook ? 'Yes' : 'No',
      notes: this.state.resourceNotes,
    }
    testResources.push(newResource);
    this.setState({
      resourceName: '',
      resourceCat: '',
      resourceQuantity: 0,
      resourceDoubleBook: false,
      resourceNotes: '',
      showingModal:false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Resources</h1>
        </div>
        <div className='col-md-3'>
          <input className='form-control' type='text' placeholder='Filter Resources...' 
          id='resourceSearch' onChange={this.filterResources} />
        </div>
        <div>
          <BootstrapTable
            keyField='id'
            data={this.filteredTestResources}
            columns={columns}
            striped
            pagination={PaginationFactory(pagination)}
          />
          <Modal
              isOpen={this.state.showingModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Test"
            >
            <form>
              <h5>Name:</h5>
              <input
                name='resourceName'
                type='text'
                value={this.state.resourceName}
                onChange={this.handleInputChange}
              />
              <h5>Category:</h5>
              <select
                name='resourceCat'
                value={this.state.resourceCat}
                onChange={this.handleInputChange}
              >
                <option value='Transportation'>Transportation</option>
                <option value='Box'>Box</option>
              </select>
              <h5>Quantity:</h5>
              <input
                name='resourceQuantity'
                type='number'
                value={this.state.resourceQuantity}
                onChange={this.handleInputChange}
              />
              <h5> Allow double booking 
              <input
                name='resourceDoubleBook'
                type='checkbox'
                checked={this.state.doubleBooking}
                onChange={this.handleInputChange}
              />
              </h5>
              <h5> Notes: </h5>
              <textarea 
                value={this.state.resourceNotes} 
                onChange={this.handleInputChange} 
                name='resourceNotes'
              />
              <br/>
              <br/>
              <ButtonToolbar>
                <Button bsStyle='primary' onClick={this.addResource}>Save</Button>
                <Button bsStyle='danger' onClick={this.closeModal}>Cancel</Button>
              </ButtonToolbar>
            </form>
          </Modal>
        </div>
        <div>
          <Button bsStyle='primary' onClick={this.openModal}> Add Resource</Button>
        </div>
      </React.Fragment>
    );
  }
}
