import { ButtonToolbar, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const registration = [
  {
    id: 0,
    name: 'École secondaire Alpha-Romeo',
    type: 'high school',
    board: 'CSPC',
    language: 'français',
    adresse: '100 rue Brooks',
    province: 'Québec',
    city: 'Gatineau',
    postal: 'J9Y2N1',
    contactName: 'Marie-Lou Dufrene',
    contactPhone: '819-456-4562',
    contactEmail: 'marielou@email.ca',
  },
];
const workshopsDetail = [
  {
    id: 0,
    workshop: '3D Printing',
    price: '145',
    time: '8:00',
    grade: '5',
    language: 'Fr',
    teacher: 'Hélène Margueritte',
    contact: 'simon123@gmail.com',
    boys: '12',
    girls: '13',
    instructor: 'Simon François',
    volunteer: '',
  },
  {
    id: 1,
    workshop: 'Beebot',
    price: '80',
    time: '9:00',
    grade: '7',
    language: 'En',
    teacher: 'Alfred Glouton',
    contact: 'alfred@gmail.com',
    boys: '12',
    girls: '13',
    instructor: 'Simon François',
    volunteer: '',
  },
];

const cellEditProperties = {
  mode: 'click',
  blurToSave: true,
};
const listLanguages = ['En', 'Fr'];

export default class RegistrationDetailPage extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Registration Detail</h1>
        </div>
        <h3>School Informations </h3>
        <button type="button" className="btn btn-primary" style={{ float: 'right' }}>Invoice</button>
        <section>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Name: </label>
            </div>
            <div className="col-md-3">
              {registration[0].name}
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">Type: </label>
            </div>
            <div className="col-md-3">
              {registration[0].type}
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Board: </label>
            </div>
            <div className="col-md-3">
              {registration[0].board}
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">Language: </label>
            </div>
            <div className="col-md-3">
              {registration[0].language}
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Adresse: </label>
            </div>
            <div className="col-md-3">
              {registration[0].adresse}
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">Province: </label>
            </div>
            <div className="col-md-3">
              {registration[0].province}
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">City: </label>
            </div>
            <div className="col-md-3">
              {registration[0].city}
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">Postal: </label>
            </div>
            <div className="col-md-3">
              {registration[0].postal}
            </div>
          </div>
        </section>
        <h3>Contact Informations</h3>
        <section>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Name: </label>
            </div>
            <div className="col-md-3">
              {registration[0].contactName}
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Phone: </label>
            </div>
            <div className="col-md-3">
              {registration[0].contactPhone}
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">Email: </label>
            </div>
            <div className="col-md-3">
              {registration[0].contactEmail}
            </div>
          </div>
        </section>
        <h3>Status Informations</h3>
        <p>This information comes from another system</p>
        <h3>Workshops</h3>
        <br />
        <section>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Date: </label>
            </div>
            <div className="col-md-3">
              12 September 2018
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-primary">Show in calendar</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Start: </label>
            </div>
            <div className="col-md-3">
              7:30 am
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">End: </label>
            </div>
            <div className="col-md-3">
              5:00 pm
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Adresse: </label>
            </div>
            <div className="col-md-3">
              {registration[0].adresse}
              {registration[0].province}
              {registration[0].postal}
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">Transport: </label>
            </div>
            <div className="col-md-3">
              <select className="selectpicker form-control">
                <option>Not selected</option>
                <option>Van 1</option>
                <option>Van 2</option>
                <option>Van 3</option>
                <option>Van 4</option>
                <option>Van 5</option>
                <option>On Campus</option>
              </select>
            </div>
          </div>
        </section>
        <div>
          <BootstrapTable
            data={workshopsDetail}
            hover
            striped
            condensed
            cellEdit={cellEditProperties}
          >
            <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="workshop" >Workshop</TableHeaderColumn>
            <TableHeaderColumn dataField="price" >Price</TableHeaderColumn>
            <TableHeaderColumn dataField="time" >Time</TableHeaderColumn>
            <TableHeaderColumn dataField="grade" >Grade</TableHeaderColumn>
            <TableHeaderColumn dataField="language" editable={{ type: 'select', options: { values: listLanguages } }}>Language</TableHeaderColumn>
            <TableHeaderColumn dataField="teacher" >Teacher</TableHeaderColumn>
            <TableHeaderColumn dataField="contact" >Contact</TableHeaderColumn>
            <TableHeaderColumn dataField="boys" >Boys</TableHeaderColumn>
            <TableHeaderColumn dataField="girls" >Girls</TableHeaderColumn>
            <TableHeaderColumn dataField="instructor" >instructor</TableHeaderColumn>
            <TableHeaderColumn dataField="volunteer" >volunteer</TableHeaderColumn>
          </BootstrapTable>
        </div>

        <br />
        <section>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Date: </label>
            </div>
            <div className="col-md-3">
              12 September 2018
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-primary">Show in calendar</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Start: </label>
            </div>
            <div className="col-md-3">
              7:30 am
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">End: </label>
            </div>
            <div className="col-md-3">
              5:00 pm
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label className="control-label float-right">Adresse: </label>
            </div>
            <div className="col-md-3">
              {registration[0].adresse}
              {registration[0].province}
              {registration[0].postal}
            </div>
            <div className="col-md-1">
              <label className="control-label float-right">Transport: </label>
            </div>
            <div className="col-md-3">
              <select className="selectpicker form-control">
                <option>Van 1</option>
                <option>Van 2</option>
                <option>Van 3</option>
                <option>Van 4</option>
                <option>Van 5</option>
                <option>On Campus</option>
              </select>
            </div>
          </div>
        </section>
        <div>
          <BootstrapTable
            data={workshopsDetail}
            hover
            striped
            condensed
          >
            <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="workshop" >Workshop</TableHeaderColumn>
            <TableHeaderColumn dataField="price" >Price</TableHeaderColumn>
            <TableHeaderColumn dataField="time" >Time</TableHeaderColumn>
            <TableHeaderColumn dataField="grade" >Grade</TableHeaderColumn>
            <TableHeaderColumn dataField="language" >Language</TableHeaderColumn>
            <TableHeaderColumn dataField="teacher" >Teacher</TableHeaderColumn>
            <TableHeaderColumn dataField="contact" >Contact</TableHeaderColumn>
            <TableHeaderColumn dataField="boys" >Boys</TableHeaderColumn>
            <TableHeaderColumn dataField="girls" >Girls</TableHeaderColumn>
            <TableHeaderColumn dataField="instructor" >instructor</TableHeaderColumn>
            <TableHeaderColumn dataField="volunteer" >volunteer</TableHeaderColumn>
          </BootstrapTable>
        </div>
        <button type="button" className="btn btn-primary">+ Add another day</button>
        <br />
      </React.Fragment>
    );
  }
}

/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/*
import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      isInStock: (i % 3 === 0) ? 'yes' : 'no'
    });
  }
}

addProducts(5);

class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  filter(event) {
    if (this.refs.nokCheckbox.checked && this.refs.okCheckbox.checked) {
      // all checkboxes are checked means we want to remove the filter for this column
      this.props.filterHandler();
    } else {
      this.props.filterHandler({ callback: this.isFiltered });
    }
  }

  isFiltered(targetValue) {
    if (targetValue === 'no') {
      return (this.refs.nokCheckbox.checked);
    } else {
      return (this.refs.okCheckbox.checked);
    }
  }

  cleanFiltered() {
    this.refs.okCheckbox.checked = true;
    this.refs.nokCheckbox.checked = true;
    this.props.filterHandler();
  }

  render() {
    return (
      <div>
        <input ref='okCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } /><label>{ this.props.textOK }</label>
        <input ref='nokCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } style={ { marginLeft: 30 + 'px' } } /><label>{ this.props.textNOK }</label>
      </div>
    );
  }
}

CheckboxFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  textOK: PropTypes.string,
  textNOK: PropTypes.string
};

CheckboxFilter.defaultProps = {
  textOK: 'OK',
  textNOK: 'Not OK'
};

function getCustomFilter(filterHandler, customFilterParameters) {
  return (
    <CheckboxFilter 
      filterHandler={ filterHandler } 
      textOK={ customFilterParameters.textOK } textNOK={ customFilterParameters.textNOK } />
  );
}

export default class CustomFilter extends React.Component {
  handleClick = () => {
    this.refs.isInStock.cleanFiltered();
  }

  render() {
    return (

      <div>
      <div className="col-md-3">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Filter by statuses</ControlLabel>
              <FormControl
                ref='inputStatus'
                onChange={this.onPickColor.bind(this)}
                inputRef={ inputStatus => this.inputStatus=inputStatus }
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
        <button className='btn btn-default' onClick={ this.handleClick }>Clear Filter</button>
        <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn ref='isInStock' dataField='isInStock' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' } } }>Product Is In Stock</TableHeaderColumn>
        </BootstrapTable>
      </div>
      
    );
  }
}*/