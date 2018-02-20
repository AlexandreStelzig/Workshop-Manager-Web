import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CalendarGrid extends Component {
  render() {
    const cellsOfOneRow = this.props.cols.map(col => <td key={col} />);
    const rowsHTML = this.props.rows.map(row => <tr key={row}><td>{row}</td>{cellsOfOneRow}</tr>);
    const headRows = this.props.cols.map(col => <th key={col}>{col}</th>);
    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-light">
            <th />
            {headRows}
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
};
