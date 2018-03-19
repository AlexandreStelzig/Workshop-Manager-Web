import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const events = [
  {
    id: 0,
    title: 'Event 1',
    allDay: true,
    start: new Date(2018, 2, 15),
    end: new Date(2018, 2, 16),
  },
  {
    id: 1,
    title: 'Event 2',
    start: new Date(2018, 2, 18),
    end: new Date(2018, 2, 19),
  },
];


BigCalendar.momentLocalizer(moment);

export default class MonthView extends Component {

  render() {
    return (
      <div>
        <BigCalendar
          style={{ height: '600px', width: '100%' }}
          events={events}
          views={['month']}
          defaultDate={new Date()}
        />
      </div>
    );
  }
}
