import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';

const columns = [
  {
    text: 'Options',
  },
  {
    dataField: 'workshop',
    text: 'Workshop',
  },
  {
    dataField: 'price',
    text: 'Price',
  },
  {
    dataField: 'time',
    text: 'Time',
  },
  {
    dataField: 'grade',
    text: 'Grade',
  },
  {
    dataField: 'language',
    text: 'Language',
  },
  {
    dataField: 'teacher',
    text: 'Teacher',
  },
  {
    dataField: 'contact',
    text: 'Contact',
  },
  {
    dataField: 'boys',
    text: 'Boys',
  },
  {
    dataField: 'girls',
    text: 'Girls',
  },
  {
    dataField: 'instructor',
    text: 'Instructor(s)',
  },
  {
    dataField: 'volunteer',
    text: 'Volunteer(s)',
  },
];

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
    id: 0, workshop: '3D Printing', price: '145', time: '8:00', grade: '5',
    language: 'FR', teacher: 'Hélène Margueritte', contact: 'simon123@gmail.com', boys: '12', girls: '13',
    instructor: 'Simon François', volunteer: '',
  },
  {
    id: 1, workshop: '3D Printing', price: '145', time: '8:00', grade: '5',
    language: 'FR', teacher: 'Hélène Margueritte', contact: 'simon123@gmail.com', boys: '12', girls: '13',
    instructor: 'Simon François', volunteer: '',
  },
  {
    id: 1, workshop: '3D Printing', price: '145', time: '8:00', grade: '5',
    language: 'FR', teacher: 'Hélène Margueritte', contact: 'simon123@gmail.com', boys: '12', girls: '13',
    instructor: 'Simon François', volunteer: '',
  },
  {
    id: 1, workshop: '3D Printing', price: '145', time: '8:00', grade: '5',
    language: 'FR', teacher: 'Hélène Margueritte', contact: 'simon123@gmail.com', boys: '12', girls: '13',
    instructor: 'Simon François', volunteer: '',
  },
];

function indication() {
  return 'No Data';
}

const pagination = {
  hideSizePerPage: true, // Hide the sizePerPage dropdown always
};

export default class RegistrationDetailPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Registration Detail</h1>
        </div>
        <h3>School Informations </h3>
        <button type="button" className="btn btn-primary" style={{float:'right'}}>Invoice</button>
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
            <div className="col-md-1">         
            </div>
            </div>
            <div className="col-md-3">
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
        <BootstrapTable
          keyField="id"
          data={workshopsDetail}
          columns={columns}
          striped
          hover
          condensed
          noDataIndication={indication()}
        />

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
        <BootstrapTable
          keyField="id"
          data={workshopsDetail}
          columns={columns}
          striped
          hover
          condensed
          noDataIndication={indication()}
        />
        <button type="button" className="btn btn-primary">+ Add another day</button>
        <br />
      </React.Fragment>
    );
  }
}
