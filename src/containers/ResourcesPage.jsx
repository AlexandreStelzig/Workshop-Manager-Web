import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { ButtonToolbar, Button } from 'react-bootstrap';
import ResourceService from '../services/ResourceService';

const initialCategories = ['Transportation', 'Bin'];
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
      resources: [],
    };
    async function getResources() {
      return ResourceService.getResources();
    }
    getResources().then(data => this.setState({
      resources: data,
    }));
    this.onAddRow = this.onAddRow.bind(this);
  }

  onAddRow(row) {
    const resource = {
      id: '',
      name: row.name,
      category: row.category,
      label: row.label,
      doubleBooking: row.doubleBooking,
      notes: row.notes,
    };
    async function addResource() {
      return ResourceService.addResource(resource);
    }
    addResource().then(data => this.setState({
      dataId: data.id,
    }));
    resource.id = this.state.dataId;
    this.state.resources.push(resource);
  }

  render() {
    const options = {
      onAddRow: this.onAddRow,
    };
    return (
      <React.Fragment>
        <div>
          <h1>Resources</h1>
        </div>
        <div>
          <BootstrapTable
            data={this.state.resources}
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
            options={options}
          >
            <TableHeaderColumn dataField="resource_id" isKey hidden hiddenOnInsert searchable={false} autoValue>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort >Name</TableHeaderColumn>
            <TableHeaderColumn dataField="category" dataSort editable={{ type: 'select', options: { values: initialCategories } }} >Category</TableHeaderColumn>
            <TableHeaderColumn dataField="label" dataSort >Label</TableHeaderColumn>
            <TableHeaderColumn dataField="double_booking" dataSort editable={{ type: 'checkbox', options: { values: 'Yes:No' } }}>Double booking</TableHeaderColumn>
            <TableHeaderColumn dataField="notes" dataSort >Notes</TableHeaderColumn>
            <TableHeaderColumn dataField="buttonToolbar" hiddenOnInsert editable={false} searchable={false} dataFormat={buttonToolbarFormatter} />
          </BootstrapTable>
        </div>
      </React.Fragment>
    );
  }
}
