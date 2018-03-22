/* eslint react/prefer-stateless-function: 0 */ // temp disable since it will have state later on
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemCell } from './CalendarCell';


export default class CalendarItem extends Component {
  render() {
    return (
      <ItemCell rowStart={3} colStart={3} rowEnd={6} colEnd={3} >
        <div>{this.props.schoolName}</div>
        <div>{this.props.status}</div>
        <div>{this.props.startDateTime.toString()}</div>
        <div>{this.props.endDateTime.toString()}</div>
        <div>{this.props.workshops[0]}</div>
      </ItemCell>
    );
  }
}

CalendarItem.propTypes = {
  schoolName: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  startDateTime: PropTypes.instanceOf(Date).isRequired,
  endDateTime: PropTypes.instanceOf(Date).isRequired,
  workshops: PropTypes.arrayOf(PropTypes.string).isRequired,
};
