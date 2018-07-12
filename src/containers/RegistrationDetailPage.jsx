import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styled from 'styled-components';
import LabelEdit from '../components/editors/LabelEdit';
import RegistrationService from '../services/RegistrationService';

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
    language: 'French',
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
    language: 'English',
    teacher: 'Alfred Glouton',
    contact: 'alfred@gmail.com',
    boys: '12',
    girls: '13',
    instructor: 'Simon François',
    volunteer: '',
  },
];

const workshopsDetail2 = [
  {
    id: 0,
    workshop: 'Arduino',
    price: '145',
    time: '8:00',
    grade: '5',
    language: 'French',
    teacher: 'Hélène Margueritte',
    contact: 'simon123@gmail.com',
    boys: '12',
    girls: '13',
    instructor: 'Alexia Girouard',
    volunteer: '',
  },
  {
    id: 1,
    workshop: 'Electricity',
    price: '80',
    time: '9:00',
    grade: '7',
    language: 'English',
    teacher: 'Alfred Glouton',
    contact: 'alfred@gmail.com',
    boys: '12',
    girls: '13',
    instructor: 'Félicité Black',
    volunteer: 'Alexia Girouard',
  },
];

const cellEditProperties = {
  mode: 'click',
  blurToSave: true,
};
const listLanguages = ['English', 'French'];
const listWorkshops = ['3D Printing', 'Beebot', 'Electricity', 'Laser Cutting', 'Arduino'];
const listInstructors = ['Simon François', 'Alexia Girouard', 'Félicité Black'];

const BoldDiv = styled.div`
  font-weight: bold;
`;

function quantityValidator(value) {
  const nan = Number.isNaN(parseInt(value, 10));
  if (nan) {
    return 'Quantity must be a number.';
  }
  return true;
}

export default class RegistrationDetailPage extends Component {
  constructor() {
    super();
    this.state = { registration: {} };
    this.textChange = this.textChange.bind(this);
  }

  componentDidMount() {
    RegistrationService.getRegistration(11).then((reg) => {
      this.setState({ registration: reg });
    });
  }

  textChange(e) {
    this.setState({ registration: { ...this.state.registration, [e.target.name]: e.target.value } });
  }

  renderRow(label1, name1, label2, name2) {
    return (
      <div className="row">
        <div className="col-md-2">
          <BoldDiv className="control-label float-right">{label1}: </BoldDiv>
        </div>
        <div className="col-md-3">
          <LabelEdit value={this.state.registration[name1]} type="text" name={name1} onValueChange={this.textChange} />
        </div>
        <div className="col-md-2">
          <BoldDiv className="control-label float-right">{label2}: </BoldDiv>
        </div>
        <div className="col-md-3">
          <LabelEdit value={this.state.registration[name2]} type="text" name={name2} onValueChange={this.textChange} />
        </div>
      </div>
    );
  }

  renderSchool() {
    return (
      <React.Fragment>
        <h3>School Informations </h3>
        <button type="button" className="btn btn-primary" style={{ float: 'right' }}>Invoice</button>
        <section>
          {this.renderRow('Name', 'name', 'Type', 'groupType')}
          {this.renderRow('Board', 'board', 'Language', 'language')}
          {this.renderRow('Adresse', 'adresse', 'Province', 'province')}
          {this.renderRow('City', 'city', 'Postal', 'postal')}
        </section>
      </React.Fragment>
    );
  }

  renderContact() {
    return (
      <React.Fragment>
        <h3>Contact Informations</h3>
        <section>
          {this.renderRow('First Name', 'contactFirstName', 'Last Name', 'contactLastName')}
          {this.renderRow('Phone', 'contactTelephone', 'Email', 'contactEmail')}
        </section>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Registration Detail</h1>
        </div>
        {this.renderSchool()}
        {this.renderContact()}
        <h3>Status Informations</h3>
        <p>This information comes from another system</p>
        <h3>Workshops</h3>
        <br />
        <section>
          <div className="row">
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Date: </BoldDiv>
            </div>
            <div className="col-md-3">
              <LabelEdit value="12 September 2018" type="text" />
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-primary">Show in calendar</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Start: </BoldDiv>
            </div>
            <div className="col-md-3">
              <LabelEdit value="7:30 am" type="text" />
            </div>
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">End: </BoldDiv>
            </div>
            <div className="col-md-3">
              <LabelEdit value="5:00 pm" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Adresse: </BoldDiv>
            </div>
            <div className="col-md-3">
              {this.state.registration.adresse}
              {this.state.registration.province}
              {this.state.registration.postal}
            </div>
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Transport: </BoldDiv>
            </div>
            <div className="col-md-3">
              <select className="selectpicker form-control">
                <option value="0">Not selected</option>
                <option value="1">Van 1</option>
                <option value="2">Van 2</option>
                <option value="3">Van 3</option>
                <option value="4">Van 4</option>
                <option value="5">Van 5</option>
                <option value="6">On Campus</option>
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
            <TableHeaderColumn dataField="workshop" editable={{ type: 'select', options: { values: listWorkshops } }}>Workshop</TableHeaderColumn>
            <TableHeaderColumn dataField="price" editable={{ validator: quantityValidator }}>Price</TableHeaderColumn>
            <TableHeaderColumn dataField="time" >Time</TableHeaderColumn>
            <TableHeaderColumn dataField="grade" >Grade</TableHeaderColumn>
            <TableHeaderColumn dataField="language" editable={{ type: 'select', options: { values: listLanguages } }}>Language</TableHeaderColumn>
            <TableHeaderColumn dataField="teacher" >Teacher</TableHeaderColumn>
            <TableHeaderColumn dataField="contact" >Contact</TableHeaderColumn>
            <TableHeaderColumn dataField="boys" editable={{ validator: quantityValidator }}>Boys</TableHeaderColumn>
            <TableHeaderColumn dataField="girls" editable={{ validator: quantityValidator }}>Girls</TableHeaderColumn>
            <TableHeaderColumn dataField="instructor" editable={{ type: 'select', options: { values: listInstructors } }}>instructor</TableHeaderColumn>
            <TableHeaderColumn dataField="volunteer" editable={{ type: 'select', options: { values: listInstructors } }}>volunteer</TableHeaderColumn>
          </BootstrapTable>
        </div>

        <br />
        <section>
          <div className="row">
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Date: </BoldDiv>
            </div>
            <div className="col-md-3">
              <LabelEdit value="12 September 2018" type="text" />
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-primary">Show in calendar</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Start: </BoldDiv>
            </div>
            <div className="col-md-3">
              <LabelEdit value="7:30 am" type="text" />
            </div>
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">End: </BoldDiv>
            </div>
            <div className="col-md-3">
              <LabelEdit value="5:00 pm" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Adresse: </BoldDiv>
            </div>
            <div className="col-md-3">
              {this.state.registration.adresse}
              {this.state.registration.province}
              {this.state.registration.postal}
            </div>
            <div className="col-md-1">
              <BoldDiv className="control-label float-right">Transport: </BoldDiv>
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
            data={workshopsDetail2}
            hover
            striped
            condensed
            cellEdit={cellEditProperties}
          >
            <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="workshop" editable={{ type: 'select', options: { values: listWorkshops } }}>Workshop</TableHeaderColumn>
            <TableHeaderColumn dataField="price" editable={{ validator: quantityValidator }}>Price</TableHeaderColumn>
            <TableHeaderColumn dataField="time" >Time</TableHeaderColumn>
            <TableHeaderColumn dataField="grade" >Grade</TableHeaderColumn>
            <TableHeaderColumn dataField="language" editable={{ type: 'select', options: { values: listLanguages } }}>Language</TableHeaderColumn>
            <TableHeaderColumn dataField="teacher" >Teacher</TableHeaderColumn>
            <TableHeaderColumn dataField="contact" >Contact</TableHeaderColumn>
            <TableHeaderColumn dataField="boys" editable={{ validator: quantityValidator }}>Boys</TableHeaderColumn>
            <TableHeaderColumn dataField="girls" editable={{ validator: quantityValidator }}>Girls</TableHeaderColumn>
            <TableHeaderColumn dataField="instructor" editable={{ type: 'select', options: { values: listInstructors } }}>instructor</TableHeaderColumn>
            <TableHeaderColumn dataField="volunteer" editable={{ type: 'select', options: { values: listInstructors } }}>volunteer</TableHeaderColumn>
          </BootstrapTable>
        </div>
        <button type="button" className="btn btn-primary">+ Add another day</button>
        <br />
      </React.Fragment>
    );
  }
}
