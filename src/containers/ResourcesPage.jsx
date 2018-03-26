import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { ButtonToolbar, Button } from 'react-bootstrap';

const initialCategories = ['Transportation', 'Bin'];
const testResources = [
  {
    id: 0, name: 'TestName', category: 'Transportation', quantity: 1, doubleBooking: 'No', notes: 'I am a test',
  },
  {
    id: 1, name: 'AnotherTest', category: 'Bin', quantity: 3, doubleBooking: 'Yes', notes: '',
  },
];
const cellEditProperties = {
  mode: 'click',
  blurToSave: true,
};

function buttonToolbarFormatter(cell, row) {
  return (
    <ButtonToolbar>
      <Button bsStyle="success">Availabilities</Button>
      <Button bsStyle="danger">Remove</Button>
    </ButtonToolbar>
  );
}

function quantityValidator(value) {
  const nan = Number.isNaN(parseInt(value, 10));
  if (nan) {
    return 'Quantity must be a number.';
  }
  return true;
}

export default class ResourcesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Resources</h1>
        </div>
        <div>
          <BootstrapTable
            data={testResources}
            hover
            striped
            condensed
            pagination
            search
            insertRow
            cellEdit={cellEditProperties}
            searchPlaceholder="Filter resources..."
          >
            <TableHeaderColumn dataField="id" isKey hidden hiddenOnInsert searchable={false} autoValue>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort >Name</TableHeaderColumn>
            <TableHeaderColumn dataField="category" dataSort editable={{ type: 'select', options: { values: initialCategories } }} >Category</TableHeaderColumn>
            <TableHeaderColumn dataField="quantity" dataSort editable={{ validator: quantityValidator }}>Quantity</TableHeaderColumn>
            <TableHeaderColumn dataField="doubleBooking" dataSort editable={{ type: 'checkbox', options: { values: 'Yes:No' } }}>Double booking</TableHeaderColumn>
            <TableHeaderColumn dataField="notes" dataSort >Notes</TableHeaderColumn>
            <TableHeaderColumn dataField="buttonToolbar" hiddenOnInsert editable={false} searchable={false} dataFormat={buttonToolbarFormatter} />
          </BootstrapTable>
        </div>
      </React.Fragment>
    );
  }
}
