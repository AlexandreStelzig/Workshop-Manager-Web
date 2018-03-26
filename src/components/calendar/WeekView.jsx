/* eslint react/prefer-stateless-function: 0 */ // temp disable since it will have state later on
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  // TODO: use moment.js or something similar
  dateDiffInDays(a, b) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / MS_PER_DAY);
  }

  render() {
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(this.state.firstDayOfWeek.getYear(), this.state.firstDayOfWeek.getMonth(), this.state.firstDayOfWeek.getDate() + i);
      days[i] = day.toDateString();
    }

    const { items } = this.props;
    for (let i = 0; i < items.length; i++) {
      items[i].colIndex = this.dateDiffInDays(this.state.firstDayOfWeek, items[i].startDateTime);
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
