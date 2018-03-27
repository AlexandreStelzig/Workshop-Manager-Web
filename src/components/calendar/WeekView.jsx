/* eslint react/prefer-stateless-function: 0 */ // temp disable since it will have state later on
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarGrid from './CalendarGrid';

export default class WeekView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [
        'Van 1',
        'Van 2',
        'Van 3',
        'Van 4',
        'On Campus',
      ],
    };

    this.state.firstDayOfWeek = props.initialFirstDayOfWeek;
  }

  render() {
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(this.state.firstDayOfWeek.getFullYear(), this.state.firstDayOfWeek.getMonth(), this.state.firstDayOfWeek.getDate() + i);
      days[i] = moment(day).format('ddd, MMM Do YYYY');
    }

    const { items } = this.props;
    for (let i = 0; i < items.length; i++) {
      items[i].colIndex = moment(items[i].startDateTime).diff(this.state.firstDayOfWeek, 'days');
      const rowIndex = this.state.resources.indexOf(items[i].resource);
      items[i].rowIndexStart = rowIndex;
      items[i].rowIndexEnd = rowIndex;
    }

    return (
      <div>
        <CalendarGrid rows={this.state.resources} cols={days} items={items} />
        <div className="row">
          <div className="col-md-4">
            <button type="button" className="btn btn-secondary">&lt; Previous Week</button>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <button type="button" className="btn btn-secondary pull-right">Next Week &gt;</button>
          </div>
        </div>
      </div>
    );
  }
}

WeekView.propTypes = {
  initialFirstDayOfWeek: PropTypes.instanceOf(Date),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    schoolName: PropTypes.string,
    status: PropTypes.string,
    startDateTime: PropTypes.instanceOf(Date),
    endDateTime: PropTypes.instanceOf(Date),
    workshops: PropTypes.arrayOf(PropTypes.string),
  })),
};
WeekView.defaultProps = {
  initialFirstDayOfWeek: new Date(),
  items: [],
};
