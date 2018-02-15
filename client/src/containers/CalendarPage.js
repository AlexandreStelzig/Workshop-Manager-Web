import React, { Component } from 'react';
import WeekView from '../components/calendar/WeekView';


export default class CalendarPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Calendar</h1>
          <WeekView />
        </div>
      </React.Fragment>
    );
  }
}
