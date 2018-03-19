/* eslint react/prefer-stateless-function: 0 */ // temp disable since it will have state later on
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CalendarGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  render() {
    const cellsOfOneRow = this.props.cols.map(col => <td key={col} />);
    const rowsHTML = this.props.rows.map(row => <tr key={row}><td>{row}</td>{cellsOfOneRow}</tr>);
    const headRows = this.props.cols.map(col => <th key={col}>{col}</th>);
    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-light">
            <tr>
              <th />
              {headRows}
            </tr>
          </thead>
          <tbody>
            {rowsHTML}
          </tbody>
        </table>
      </div>
    );
  }
}
CalendarGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    schoolName: PropTypes.string,
    status: PropTypes.number,
    startDateTime: PropTypes.instanceOf(Date),
    endDateTime: PropTypes.instanceOf(Date),
    workshops: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};
