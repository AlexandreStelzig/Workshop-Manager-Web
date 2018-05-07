import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeneralInformation from '../components/registrationForm/GeneralInfomation';
import TeacherInformation from '../components/registrationForm/TeacherInfomation';
import WorkshopInformation from '../components/registrationForm/WorkshopInfomation';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageKey: 1,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.formValues = {
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
    this.saveValues = this.saveValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNext() {
    this.setState({ pageKey: this.state.pageKey + 1 });
  }
  handleBack() {
    this.setState({ pageKey: this.state.pageKey - 1 });
  }

  saveValues(fields) {
    this.formValues = Object.assign({}, this.formValues, fields);
  }
  // Temporary submit function
  handleSubmit() { // eslint-disable-line
    alert('Form submitted!'); // eslint-disable-line
  }

  render() {
    switch (this.state.pageKey) {
      case 1:
        return (
          <GeneralInformation
            formValues={this.formValues}
            handleNext={this.handleNext}
            saveValues={this.saveValues}
          />
        );
      case 2:
        return (
          <TeacherInformation
            formValues={this.formValues}
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            saveValues={this.saveValues}
          />
        );
      case 3:
        return (
          <WorkshopInformation
            formValues={this.formValues}
            handleSubmit={this.handleSubmit}
            handleBack={this.handleBack}
            saveValues={this.saveValues}
          />
        );
      default:
        return (
          <GeneralInformation
            formValues={this.formValues}
            handleNext={this.handleNext}
            saveValues={this.saveValues}
          />
        );
    }
  }
}
