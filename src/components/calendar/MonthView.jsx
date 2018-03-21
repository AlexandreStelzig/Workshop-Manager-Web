import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

export default class MonthView extends Component {
  render() {
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
    return (
      <div>
        <BigCalendar
          style={{ height: '600px', width: '100%' }}
          events={events}
          views={['month']}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
        />
        <div className="row">
          <div className="col-md-4">
            <button type="button" className="btn btn-secondary">&lt; Previous Month</button>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <button type="button" className="btn btn-secondary pull-right">Next Month &gt;</button>
          </div>
        </div>
      </div>
    );
  }
}
