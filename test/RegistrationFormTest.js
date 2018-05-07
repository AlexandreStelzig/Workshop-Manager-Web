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
  it ('starts on page 1', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(wrapper.state('pageKey')).to.equal(1);
  });
  it ('contains GeneralInformation on page 1', () => {
     const wrapper = mount(<RegistrationForm/>);
     expect(wrapper.find('GeneralInformation')).to.have.length(1);
  });
});
