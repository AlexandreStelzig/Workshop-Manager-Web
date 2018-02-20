import React, { Component } from 'react';
import CalendarGrid from './CalendarGrid';

export default class DayView extends Component {
  render() {
    const resources = [
      'Van 1',
      'Van 2',
      'Van 3',
      'Van 4',
      'On Campus',
    ];

    const times = [
      '6h00',
      '7h00',
      '8h00',
      '9h00',
      '10h00',
      '11h00',
      '12h00',
      '13h00',
      '14h00',
      '15h00',
      '16h00',
      '17h00',
    ];

    return (
      <div>
        <CalendarGrid rows={times} cols={resources} />
        <div className="row">
          <div className="col-md-4">
            <button type="button" className="btn btn-secondary">&lt; Previous Day</button>
          </div>
          <div className="offset-md-4 col-md-4">
            <button type="button" className="btn btn-secondary float-right">Next Day &gt;</button>
          </div>
        </div>
      </div>
    );
  }
}
