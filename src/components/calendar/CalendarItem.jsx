/* eslint react/prefer-stateless-function: 0 */ // temp disable since it will have state later on
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { ItemCell } from './CalendarCell';

const CenteredDiv = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

const StyledList = styled.ol`
  padding-left: 15px;
`;

export default class CalendarItem extends Component {
  render() {
    const {
      workshops,
      startDateTime,
      endDateTime,
      status,
      schoolName,
      ...rest
    } = this.props;

    const listWorkshops = workshops.map(ws => <li key={ws}>{ws}</li>);
    return (
      <ItemCell {...rest} >
        <CenteredDiv>
          <div>{`${moment(startDateTime).format('hh:mm')} - ${moment(endDateTime).format('hh:mm')}`}</div>
          <div>{status}</div>
          <div>{schoolName}</div>
        </CenteredDiv>
        <StyledList>{listWorkshops}</StyledList>
      </ItemCell>
    );
  }
}

CalendarItem.propTypes = {
  schoolName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  startDateTime: PropTypes.instanceOf(Date).isRequired,
  endDateTime: PropTypes.instanceOf(Date).isRequired,
  workshops: PropTypes.arrayOf(PropTypes.string).isRequired,
  rowStart: PropTypes.number.isRequired,
  colStart: PropTypes.number.isRequired,
  rowEnd: PropTypes.number.isRequired,
  colEnd: PropTypes.number.isRequired,
};
