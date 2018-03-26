/* eslint react/prefer-stateless-function: 0 */ // temp disable since it will have state later on
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarGrid from './CalendarGrid';


export default class DayView extends Component {
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
      times: [
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
      ],
    };
  }

  render() {
    const timesString = this.state.times.map(time => `${time}h00`);

    const { items } = this.props;
    for (let i = 0; i < items.length; i++) {
      items[i].colIndex = this.state.resources.indexOf(items[i].resource);
      items[i].rowIndexStart = this.state.times.indexOf(items[i].startDateTime.getHours());
      items[i].rowIndexEnd = this.state.times.indexOf(items[i].endDateTime.getHours());
    }

    return (
      <div>
        <CalendarGrid rows={timesString} cols={this.state.resources} items={items} />
        <div className="row">
          <div className="col-md-4">
            <button type="button" className="btn btn-secondary">&lt; Previous Day</button>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <button type="button" className="btn btn-secondary pull-right">Next Day &gt;</button>
          </div>
        </div>
      </div>
    );
  }
}
DayView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    schoolName: PropTypes.string,
    status: PropTypes.string,
    startDateTime: PropTypes.instanceOf(Date),
    endDateTime: PropTypes.instanceOf(Date),
    workshops: PropTypes.arrayOf(PropTypes.string),
  })),
};
DayView.defaultProps = {
  items: [],
};
