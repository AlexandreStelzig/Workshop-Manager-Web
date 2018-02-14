import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import {ButtonToolbar, Button} from 'react-bootstrap';

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

var filteredTestResources = testResources;

var filter = '';

const pagination = {
  paginationSize: 1,
  hideSizePerPage: true
};

function filterResources(event) {
  filter = event.target.value;
  filteredTestResources = [];
  for(var i = 0; i < testResources.length; i++) {
    if(testResources[i].name.includes(filter) || testResources[i].category.includes(filter)) {
      filteredTestResources.push(testResources[i]);
    }
  }
};

export default class ResourcesPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Resources</h1>
        </div>
        <div className='col-md-3'>
          <input className='form-control' type='text' placeholder='Search Resources...' id='resourceSearch' onChange={filterResources} />
        </div>
        <div>
          <BootstrapTable
            keyField='id'
            data={filteredTestResources}
            columns={columns}
            striped
            pagination={PaginationFactory(pagination)}
          />
        </div>
        <div>
          <Button bsStyle='primary'>Add Resource</Button>
        </div>
      </React.Fragment>
    );
  }
}
