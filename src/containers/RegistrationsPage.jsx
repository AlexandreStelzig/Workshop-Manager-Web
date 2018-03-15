import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Redirect } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const registrations = [
  {
    id: 0, status: 'new', dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Soprano', email: 'alexia@gmail.com',
  }, {
    id: 1, status: 'sent', dateSubmitted: '02/02/2018', school: 'St-Medard', name: 'Simon François', email: 'simon123@gmail.com',
  }, {
    id: 2, status: 'sent', dateSubmitted: '01/02/2018', school: 'Grande-Rivière', name: 'Simon Pauletier', email: 'simon11@gmail.com',
  }, {
    id: 3, status: 'confirmed', dateSubmitted: '03/01/2018', school: 'UOttawa', name: 'Aimy Salazar', email: 'aimy@gmail.com',
  }, {
    id: 4, status: 'confirmed', dateSubmitted: '04/01/2018', school: 'Scouts', name: 'Johanne Doe', email: 'johanneDoe@gmail.com',
  }, {
    id: 5, status: 'confirmed', dateSubmitted: '07/01/2018', school: 'Petit-Ruisseau', name: 'Paul Boris', email: 'paulBoris@gmail.com',
  }, {
    id: 6, status: 'new', dateSubmitted: '18/01/2018', school: 'École élémentaire St-Jean De Bréboeuf', name: 'Amy Sandiago', email: 'amy@gmail.com',
  }, {
    id: 7, status: 'new', dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Diaz', email: 'al@gmail.com',
  }, {
    id: 8, status: 'confirmed', dateSubmitted: '01/02/2018', school: 'St-Medard', name: 'Jake Travolta', email: 'travolta@gmail.com',
  }, {
    id: 9, status: 'cancelled', dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Soprano', email: 'soprano@gmail.com',
  }, {
    id: 10, status: 'conflict', dateSubmitted: '02/02/2018', school: 'St-Medard', name: 'Simon François', email: 'sFran@gmail.com',
  }, {
    id: 11, status: 'cancelled', dateSubmitted: '01/02/2018', school: 'Grande-Rivière', name: 'Alex Rider', email: 'aRider@gmail.com',
  }];

const statuses = {
};

const progBar = {
  width: '25%',
};

export default class RegistrationsPage extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange() {
    this.statusRef.applyFilter(this.inputStatus.value);
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
          <div className="col-md-9">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={progBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
          <div className="col-md-3">
          100 out of 400
          </div>
          <div className="col-md-9">
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={progBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Filter by statuses</ControlLabel>
              <FormControl
                onChange={this.onSelectChange}
                inputRef={(inputStatus) => { this.inputStatus = inputStatus; }}
                componentClass="select"
                placeholder="select"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="sent">Sent</option>
                <option value="conflict">Conflict</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
                <option value="consent">Consent</option>
                <option value="paid">Paid</option>
                <option value="unpayed">Unpayed</option>
              </FormControl>
            </FormGroup>
          </div>
          <div className="col-md-3">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>By year</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
              >
                <option value="">All Years</option>
                <option value="new">2018</option>
                <option value="sent">2017</option>
                <option value="conflict">2016</option>
                <option value="confirmed">2015</option>
              </FormControl>
            </FormGroup>
          </div>
        </div>
        <div>
          <BootstrapTable
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
            <TableHeaderColumn dataField="status" ref={(statusRef) => { this.statusRef = statusRef; }} filter={{ type: 'SelectFilter', options: statuses }} dataSort >Status</TableHeaderColumn>
            <TableHeaderColumn dataField="dateSubmitted" dataSort >Date Submitted</TableHeaderColumn>
            <TableHeaderColumn dataField="school" dataSort >School</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort >Client</TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataSort >Email</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </React.Fragment>
    );
  }
}