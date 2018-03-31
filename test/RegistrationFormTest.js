import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RegistrationForm from '../src/containers/RegistrationForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Registration form', function() {
  it ('renders', () => {
    shallow(<RegistrationForm />);
  });
  it ('contains a Grid component', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(wrapper.find('Grid')).to.have.length(1);
  });
  it ('contains a form', () => {
    const wrapper = mount(<RegistrationForm />);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it ('contains 27 form control components', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(wrapper.find('FormControl')).to.have.length(27);
  });
  it ('starts on page 1', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(wrapper.state('pageKey')).to.equal(1);
  });
  it ('has a contact email input', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(wrapper.find('[name="contactEmail"]')).to.have.length(1);
  });
  it ('has a next button for page one', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(wrapper.find('[name="pageOneNext"]')).to.have.length(1);
  });
  it ('changes to page 2 when next is clicked', () => {
    const wrapper = shallow(<RegistrationForm />);
    wrapper.find('[name="pageOneNext"]').simulate('click');
    expect(wrapper.state('pageKey')).to.equal(2);
  });
});
