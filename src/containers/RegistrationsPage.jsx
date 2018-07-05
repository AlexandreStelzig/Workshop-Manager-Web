import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Redirect } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl, ToggleButtonGroup, ToggleButton, Button, Badge } from 'react-bootstrap';

const registrations = [
  {
    id: 0, status: 'new', dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Soprano', email: 'alexia@gmail.com', isPayed: true,
  }, {
    id: 1, status: 'sent', dateSubmitted: '02/02/2018', school: 'St-Medard', name: 'Simon François', email: 'simon123@gmail.com', isPayed: true,
  }, {
    id: 2, status: 'sent', dateSubmitted: '01/02/2018', school: 'Grande-Rivière', name: 'Simon Pauletier', email: 'simon11@gmail.com', isPayed: true,
  }, {
    id: 3, status: 'confirmed', dateSubmitted: '03/01/2018', school: 'UOttawa', name: 'Aimy Salazar', email: 'aimy@gmail.com', isPayed: false,
  }, {
    id: 4, status: 'confirmed', dateSubmitted: '04/01/2018', school: 'Scouts', name: 'Johanne Doe', email: 'johanneDoe@gmail.com', isPayed: false,
  }, {
    id: 5, status: 'confirmed', dateSubmitted: '07/01/2018', school: 'Petit-Ruisseau', name: 'Paul Boris', email: 'paulBoris@gmail.com', isPayed: false,
  }, {
    id: 6, status: 'new', dateSubmitted: '18/01/2018', school: 'École élémentaire St-Jean De Bréboeuf', name: 'Amy Sandiago', email: 'amy@gmail.com', isPayed: true,
  }, {
    id: 7, status: 'new', dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Diaz', email: 'al@gmail.com', isPayed: true,
  }, {
    id: 8, status: 'confirmed', dateSubmitted: '01/02/2018', school: 'St-Medard', name: 'Jake Travolta', email: 'travolta@gmail.com', isPayed: true,
  }, {
    id: 9, status: 'cancelled', dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Soprano', email: 'soprano@gmail.com', isPayed: false,
  }, {
    id: 10, status: 'conflict', dateSubmitted: '02/02/2018', school: 'St-Medard', name: 'Simon François', email: 'sFran@gmail.com', isPayed: true,
  }, {
    id: 11, status: 'cancelled', dateSubmitted: '01/02/2018', school: 'Grande-Rivière', name: 'Alex Rider', email: 'aRider@gmail.com', isPayed: true,
  }];
const statuses = [
  {
    status: 'all', label: 'All Statuses', count: 11,
  }, {
    status: 'new', label: 'New', count: 3,
  }, {
    status: 'sent', label: 'Sent', count: 2,
  }, {
    status: 'conflict', label: 'Conflict', count: 1,
  }, {
    status: 'confirmed', label: 'Confirmed', count: 4,
  }, {
    status: 'cancelled', label: 'Cancelled', count: 2,
  }, {
    status: 'consent', label: 'Consent', count: 0,
  }, {
    status: 'unpayed', label: 'Unpayed', count: 3,
  }];

const progBar = {
  width: '25%',
};

export default class RegistrationsPage extends Component {
  constructor() {
    super();
    this.state = {
      filterStatus: 'all',
      redirect: false,
    };
    this.onToggleChange = this.onToggleChange.bind(this);
  }

  onToggleChange(e) {
    if (e === 'all') {
      this.setState({ filterStatus: 'all' });
      this.tableRef.handleFilterData({ status: '' });
    } else if (e === 'unpayed') {
      this.setState({ filterStatus: 'unpayed' });
      this.tableRef.handleFilterData({ status: '', isPayed: false });
    } else {
      this.setState({ filterStatus: e });
      this.tableRef.handleFilterData({ status: e });
    }
  }

  changepage() {
    this.setState({ redirect: true });
  }
  render() {
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      hideSelectColumn: true,
      onSelect: () => {
        this.setState({ redirect: true });
      },
    };
    const toggleItem = statuses.map(a => <ToggleButton key={a.status} value={a.status}>{a.label} <Badge>{a.count}</Badge></ToggleButton>);
    if (this.state.redirect) {
      return <Redirect push to="/registrationDetail" />;
    }
    return (
      <React.Fragment>
        <div>
          <h1>Registrations</h1>
          <p>It will show all applications acording to their statuses.</p>
        </div>
        <div className="row">
          <div className="col-md-3">
          100 out of 400
          </div>
          <div className="col-md-3">
          100 out of 400
          </div>
          <div className="col-md-9">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={progBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
          <div className="col-md-9">
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={progBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
        </div>
        <br />
        <div>
          <ToggleButtonGroup justified bsClass=" btn-group" name="viewMode" type="radio" onChange={this.onToggleChange} value={this.state.filterStatus}>
            {toggleItem}
          </ToggleButtonGroup>
          <BootstrapTable
            inputRef="table"
            ref={(tableRef) => { this.tableRef = tableRef; }}
            data={registrations}
            hover
            striped
            condensed
            pagination
            search
            searchPlaceholder="Filter registrations..."
            selectRow={selectRow}
          >
            <TableHeaderColumn dataField="id" isKey hidden searchable={false}>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="status" filterFormatted dataSort >Status</TableHeaderColumn>
            <TableHeaderColumn dataField="dateSubmitted" dataSort >Date Submitted</TableHeaderColumn>
            <TableHeaderColumn dataField="school" dataSort >School</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort >Client</TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataSort >Email</TableHeaderColumn>
            <TableHeaderColumn dataField="isPayed" hidden searchable={false}>Payed?</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </React.Fragment>
    );
  }
}
