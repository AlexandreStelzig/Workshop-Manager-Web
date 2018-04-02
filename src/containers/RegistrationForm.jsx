import React, { Component } from 'react';

const RegistrationGeneralInformation = require('./RegistrationGeneralInfomation');
const RegistrationTeacherInformation = require('./RegistrationTeacherInfomation');
const RegistrationWorkshopInformation = require('./RegistrationWorkshopInfomation');

let formValues = {
  contactFirstName: '',
  contactLastName: '',
  contactEmail: '',
  contactPhone: '',
  groupKey: 1,
  groupName: '',
  schoolBoard: '',
  language: 'English',
  schoolType: 'Elementary',
  address: '',
  city: '',
  region: 'Ottawa-Gatineau',
  province: 'Ontario',
  postalCode: '',
  orgPhone: '',
  schoolFax: '',
  schoolAudience: 'General Youth',
  schoolSchedule: [],
  teachers: [],
  selectWorkshop: -1,
  registeredWorkshops: [],
  selectedDescription: 'Select a workshop using the dropdown list above.',
  selectedName: 'Select workshop',
  comments: '',
  autogenId: 0,
  workshopLocation: 'Your location',
  preferredDate: '',
  alternateDate: '',
};

function saveValues(fields) {
  formValues = Object.assign({}, formValues, fields);
}

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageKey: 1,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveValues = this.saveValues.bind(this);
  }

  handleNext() {
    this.setState({ pageKey: this.state.pageKey + 1 });
  }

  handleBack() {
    this.setState({ pageKey: this.state.pageKey - 1 });
  }

  // Temporary submit function
  handleSubmit() { // eslint-disable-line
    alert('Form submitted!'); // eslint-disable-line
  }

  saveValues(fields) {
    formValues = Object.assign({}, formValues, fields);
  }

  render() {
    switch (this.state.pageKey) {
      case 1:
        return (
          <RegistrationGeneralInformation
            formValues={formValues}
            handleNext={this.handleNext}
            saveValues={saveValues}
          />
        );
      case 2:
        return (
          <RegistrationTeacherInformation
            formValues={formValues}
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            saveValues={saveValues}
          />
        );
      case 3:
        return (
          <RegistrationWorkshopInformation
            formValues={formValues}
            handleSubmit={this.handleSubmit}
            handleBack={this.handleBack}
            saveValues={saveValues}
          />
        );
      default:
        return (
          <RegistrationGeneralInformation
            formValues={formValues}
            handleNext={this.handleNext}
            saveValues={this.saveValues}
          />
        );
    }
  }
}
