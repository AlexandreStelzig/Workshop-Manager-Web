/* eslint react/prefer-stateless-function: 0 */ // temp disable since it will have state later on
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeaderCell, BackgroundCell } from './CalendarCell';
import CalendarItem from './CalendarItem';


const GridContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(${props => (props.numberOfCols)}, 1fr);
  grid-auto-flow: dense;
  margin-bottom: 10px;
  border-radius: 5px;
  border: solid;
  border-width: 1px 1px 2px 2px;
  border-color: #dddddd;
`;

export default class CalendarGrid extends Component {
  render() {
    const backgroundItems = [];

    // Column headers
    backgroundItems.push(<HeaderCell key={`h${0}`} rowStart={1} colStart={1} rowEnd={1} colEnd={1} />);
    for (let k = 0; k < this.props.cols.length; k++) {
      backgroundItems.push(<HeaderCell key={`h${k + 1}`} rowStart={1} colStart={k + 2} rowEnd={1} colEnd={k + 2} isLastCol={k === this.props.cols.length - 1}>{this.props.cols[k]}</HeaderCell>);
    }

    for (let i = 0; i < this.props.rows.length; i++) {
      // Row headers
      backgroundItems.push(<HeaderCell key={`r${i + 1}`} rowStart={i + 2} colStart={1} rowEnd={i + 2} colEnd={1} isLastRow={i === this.props.rows.length - 1}>{this.props.rows[i]}</HeaderCell>);
      for (let j = 0; j < this.props.cols.length; j++) {
        // Blank cells
        backgroundItems.push(<BackgroundCell key={`r${i + 1}_${j + 1}`} rowStart={i + 2} colStart={j + 2} rowEnd={i + 2} colEnd={j + 2} isLastCol={j === this.props.cols.length - 1} isLastRow={i === this.props.rows.length - 1} />);
      }
    }

    const calItems = this.props.items.map(item => (
      <CalendarItem
        key={item.id}
        schoolName={item.schoolName}
        status={item.status}
        startDateTime={item.startDateTime}
        endDateTime={item.endDateTime}
        workshops={item.workshops}
        rowStart={item.rowIndexStart + 2}
        colStart={item.colIndex + 2}
        rowEnd={item.rowIndexEnd + 2}
        colEnd={item.colIndex + 2}
      />
    ));

    return (
      <GridContainer numberOfCols={this.props.cols.length + 1}>
        {backgroundItems}
        {calItems}
      </GridContainer>
    );
  }
}
CalendarGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    schoolName: PropTypes.string,
    status: PropTypes.string,
    startDateTime: PropTypes.instanceOf(Date),
    endDateTime: PropTypes.instanceOf(Date),
    workshops: PropTypes.arrayOf(PropTypes.string),
    colIndex: PropTypes.number,
    rowIndexStart: PropTypes.number,
    rowIndexEnd: PropTypes.number,
  })),
};

CalendarGrid.defaultProps = {
  items: [],
};
