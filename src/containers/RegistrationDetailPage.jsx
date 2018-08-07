import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styled from 'styled-components';
import LabelEdit from '../components/editors/LabelEdit';
import SimpleDropdown from '../components/editors/SimpleDropdown';
import RegistrationService from '../services/RegistrationService';

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
  static renderRow(label1, comp1, label2, comp2) {
    return (
      <div className="row">
        <div className="col-md-2">
          <BoldDiv className="control-label float-right">{label1}: </BoldDiv>
        </div>
        <div className="col-md-3">
          {comp1}
          {/* <LabelEdit value={value1} type="text" name={name1} onValueChange={handleChange} /> */}
        </div>
        <div className="col-md-2">
          <BoldDiv className="control-label float-right">{label2}: </BoldDiv>
        </div>
        <div className="col-md-3">
          {comp2}
          {/* <LabelEdit value={value2} type="text" name={name2} onValueChange={handleChange} /> */}
        </div>
      </div>
    );
  }

  constructor() {
    super();
    this.state = { registration: { school: {} } };
    this.textContactChange = this.textContactChange.bind(this);
    this.textSchoolChange = this.textSchoolChange.bind(this);
  }

  componentDidMount() {
    RegistrationService.getRegistration(this.props.match.params.id).then((reg) => {
      this.setState({ registration: reg });
    });
  }

  textContactChange(e) {
    const registration = { ...this.state.registration, [e.target.name]: e.target.value };
    RegistrationService.editRegistration(registration);
    this.setState({ registration });
  }

  textSchoolChange(e) {
    const school = { ...this.state.registration.school, [e.target.name]: e.target.value };
    const registration = { ...this.state.registration, school };
    RegistrationService.editRegistration(registration);
    this.setState({ registration });
  }

  renderSchoolRow(label1, name1, label2, name2) {
    const value1 = this.state.registration.school[name1];
    const value2 = this.state.registration.school[name2];
    return RegistrationDetailPage.renderRow(label1, name1, value1, label2, name2, value2, this.textSchoolChange);
  }

  renderContactRow(label1, name1, label2, name2) {
    const value1 = this.state.registration[name1];
    const value2 = this.state.registration[name2];
    return RegistrationDetailPage.renderRow(label1, name1, value1, label2, name2, value2, this.textContactChange);
  }

  renderSchool() {
    const types = [{
      id: 'Elementary',
      name: 'Elementary',
    }, {
      id: 'High School',
      name: 'High School',
    }, {
      id: 'CEGEP',
      name: 'CEGEP',
    }];

    const languages = [{
      id: 'ENG',
      name: 'English',
    }, {
      id: 'FRA',
      name: 'French',
    }, {
      id: 'BIL',
      name: 'Bilingual',
    }];


    return (
      <React.Fragment>
        <h3>School Informations </h3>
        <button type="button" className="btn btn-primary" style={{ float: 'right' }}>Invoice</button>
        <section>
          {RegistrationDetailPage.renderRow(
            'Name', <LabelEdit value={this.state.registration.school.schoolName} type="text" name="schoolName" onValueChange={this.textSchoolChange} />,
            'Type', <SimpleDropdown value={this.state.registration.school.schoolType} items={types} name="schoolType" onValueChange={this.textSchoolChange} />,
            )}
          {RegistrationDetailPage.renderRow(
            'Board', <LabelEdit value={this.state.registration.school.schoolBoard} type="text" name="schoolBoard" onValueChange={this.textSchoolChange} />,
            'Language', <SimpleDropdown value={this.state.registration.school.language} items={languages} name="language" onValueChange={this.textSchoolChange} />,
            )}
          {RegistrationDetailPage.renderRow(
            'Address', <LabelEdit value={this.state.registration.school.address} type="text" name="address" onValueChange={this.textSchoolChange} />,
            'Province', <LabelEdit value={this.state.registration.school.province} type="text" name="province" onValueChange={this.textSchoolChange} />,
            )}
          {RegistrationDetailPage.renderRow(
            'City', <LabelEdit value={this.state.registration.school.city} type="text" name="city" onValueChange={this.textSchoolChange} />,
            'Postal', <LabelEdit value={this.state.registration.school.postalCode} type="text" name="postalCode" onValueChange={this.textSchoolChange} />,
            )}
        </section>
      </React.Fragment>
    );
  }

  renderContact() {
    return (
      <React.Fragment>
        <h3>Contact Informations</h3>
        <section>
          {RegistrationDetailPage.renderRow(
            'First Name', <LabelEdit value={this.state.registration.contactFirstName} type="text" name="contactFirstName" onValueChange={this.textContactChange} />,
            'Last Name', <LabelEdit value={this.state.registration.contactLastName} type="text" name="contactLastName" onValueChange={this.textContactChange} />,
            )}
          {RegistrationDetailPage.renderRow(
            'Phone', <LabelEdit value={this.state.registration.contactTelephone} type="text" name="contactTelephone" onValueChange={this.textContactChange} />,
            'Email', <LabelEdit value={this.state.registration.contactEmail} type="text" name="contactEmail" onValueChange={this.textContactChange} />,
            )}
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
