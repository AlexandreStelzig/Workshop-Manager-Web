import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { ButtonToolbar, Button } from 'react-bootstrap';

const initialCategories = ['Transportation', 'Bin'];
const testResources = [
  {
    id: 0, name: 'Van1', category: 'Transportation', label: '', doubleBooking: 'Yes', notes: 'License plate: 2FAST',
  },
  {
    id: 1, name: 'Bin 1', category: 'Bin', label: 'B1', doubleBooking: 'No', notes: 'For 3D printing',
  },
  {
    id: 2, name: 'Bin 2', category: 'Bin', label: 'B2', doubleBooking: 'No', notes: 'For Electricity',
  },
];
const cellEditProperties = {
  mode: 'click',
  blurToSave: true,
};
const selectRow = {
  mode: 'checkbox',
};

function buttonToolbarFormatter(cell, row) {
  return (
    <ButtonToolbar>
      <Button bsStyle="success">Availabilities</Button>
    </ButtonToolbar>
  );
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
            selectRow={selectRow}
            deleteRow
            cellEdit={cellEditProperties}
            searchPlaceholder="Filter resources..."
          >
            <TableHeaderColumn dataField="id" isKey hidden hiddenOnInsert searchable={false} autoValue>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort >Name</TableHeaderColumn>
            <TableHeaderColumn dataField="category" dataSort editable={{ type: 'select', options: { values: initialCategories } }} >Category</TableHeaderColumn>
            <TableHeaderColumn dataField="label" dataSort >Label</TableHeaderColumn>
            <TableHeaderColumn dataField="doubleBooking" dataSort editable={{ type: 'checkbox', options: { values: 'Yes:No' } }}>Double booking</TableHeaderColumn>
            <TableHeaderColumn dataField="notes" dataSort >Notes</TableHeaderColumn>
            <TableHeaderColumn dataField="buttonToolbar" hiddenOnInsert editable={false} searchable={false} dataFormat={buttonToolbarFormatter} />
          </BootstrapTable>
        </div>
      </React.Fragment>
    );
  }
}
