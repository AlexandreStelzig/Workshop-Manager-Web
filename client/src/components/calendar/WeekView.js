import React, { Component } from 'react';
import CalendarGrid from './CalendarGrid';

export default class WeekView extends Component {
  render() {
    const resources = [
      'Van 1',
      'Van 2',
      'Van 3',
      'Van 4',
      'On Campus',
    ];

    const days = [
      'Monday Jan 1st',
      'Tuesday Jan 2nd',
      'Wednesday Jan 3rd',
      'Thursday Jan 4th',
      'Friday Jan 5th',
      'Saturday Jan 6th',
      'Sunday Jan 7th',
    ];

    return (
      <div>
        <CalendarGrid rows={resources} cols={days} />
      </div>
    );
  }
}
