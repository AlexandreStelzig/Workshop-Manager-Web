import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Redirect } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Badge } from 'react-bootstrap';
import RegistrationService from '../services/RegistrationService';

const progBar = {
  width: '25%',
};

export default class RegistrationsPage extends Component {
  constructor() {
    super();
    this.state = {
      filterStatus: 'All',
      redirect: false,
      statusCount: [
        {
          status: 'All', label: 'All Statuses', count: 0,
        }, {
          status: 'New', label: 'New', count: 0,
        }, {
          status: 'Sent', label: 'Sent', count: 0,
        }, {
          status: 'Conflict', label: 'Conflict', count: 0,
        }, {
          status: 'Confirmed', label: 'Confirmed', count: 0,
        }, {
          status: 'Cancelled', label: 'Cancelled', count: 0,
        }, {
          status: 'Consent', label: 'Consent', count: 0,
        }, {
          status: 'Unpayed', label: 'Unpayed', count: 0,
        }],
    };
    this.onToggleChange = this.onToggleChange.bind(this);
  }

  componentDidMount() {
    RegistrationService.getRegistrations().then((reg) => {
      this.setState({ registrations: reg });
    });
    RegistrationService.getStatusCount().then((statuses) => {
      const statusCopy = this.state.statusCount;
      for (let i = 0; i < statusCopy.length; i++) {
        statusCopy[i].count = statuses[statusCopy[i].status] === undefined ? 0 : statuses[statusCopy[i].status];
      }
      this.setState({ statusCount: statusCopy });
    });
  }

  onToggleChange(e) {
    if (e === 'All') {
      this.setState({ filterStatus: 'All' });
      this.tableRef.handleFilterData({ status: '' });
    } else if (e === 'Unpayed') {
      this.setState({ filterStatus: 'Unpayed' });
      this.tableRef.handleFilterData({ status: '', paid: false });
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

    const toggleItem = this.state.statusCount.map(a => <ToggleButton key={a.status} value={a.status}>{a.label} <Badge>{a.count}</Badge></ToggleButton>);
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
            data={this.state.registrations}
            hover
            striped
            condensed
            pagination
            search
            searchPlaceholder="Filter registrations..."
            selectRow={selectRow}
          >
            <TableHeaderColumn dataField="registrationId" isKey hidden searchable={false}>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="status" filterFormatted dataSort >Status</TableHeaderColumn>
            <TableHeaderColumn dataField="submissionDate" dataSort >Date Submitted</TableHeaderColumn>
            <TableHeaderColumn dataField="school" dataSort dataFormat={cell => ((cell !== null && cell.schoolName !== null) ? cell.schoolName : '')} >School</TableHeaderColumn>
            <TableHeaderColumn dataField="contactFullName" dataSort >Client</TableHeaderColumn>
            <TableHeaderColumn dataField="contactEmail" dataSort >Email</TableHeaderColumn>
            <TableHeaderColumn dataField="paid" hidden searchable={false}>Payed?</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </React.Fragment>
    );
  }
}
