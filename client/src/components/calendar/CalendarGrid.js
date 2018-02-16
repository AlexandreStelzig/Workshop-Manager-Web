import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CalendarGrid extends Component {
  render() {
    return (
      <div></div>
    );
  }
}
CalendarGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
};
