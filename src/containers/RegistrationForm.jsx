import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeneralInformation from '../components/registrationForm/GeneralInfomation';
import TeacherInformation from '../components/registrationForm/TeacherInfomation';
import WorkshopInformation from '../components/registrationForm/WorkshopInfomation';

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

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageKey: 1,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleNext() {
    this.setState({ pageKey: this.state.pageKey + 1 });
  }
  handleBack() {
    this.setState({ pageKey: this.state.pageKey - 1 });
  }

  render() {
    switch (this.state.pageKey) {
      case 1:
        return (
          <GeneralInformation
            formValues={formValues}
            handleNext={this.handleNext}
            saveValues={this.props.saveValues}
          />
        );
      case 2:
        return (
          <TeacherInformation
            formValues={formValues}
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            saveValues={this.props.saveValues}
          />
        );
      case 3:
        return (
          <WorkshopInformation
            formValues={formValues}
            handleSubmit={this.props.handleSubmit}
            handleBack={this.handleBack}
            saveValues={this.props.saveValues}
          />
        );
      default:
        return (
          <GeneralInformation
            formValues={formValues}
            handleNext={this.handleNext}
            saveValues={this.props.saveValues}
          />
        );
    }
  }
}

RegistrationForm.propTypes = {
  saveValues: PropTypes.func,
  handleSubmit: PropTypes.func,
};

RegistrationForm.defaultProps = {
  saveValues: function saveValues(fields) {
    formValues = Object.assign({}, formValues, fields);
  },
  // Temporary submit function
  handleSubmit: function handleSubmit() { // eslint-disable-line
    alert('Form submitted!'); // eslint-disable-line
  },
};
