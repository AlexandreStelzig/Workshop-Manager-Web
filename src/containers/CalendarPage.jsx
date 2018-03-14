import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import WeekView from '../components/calendar/WeekView';
import DayView from '../components/calendar/DayView';
import SimpleDropdown from '../components/editors/SimpleDropdown';

export default class CalendarPage extends Component {
  constructor() {
    super();
    this.state = { viewMode: 'Week' };
    this.handleViewModeChange = this.handleViewModeChange.bind(this);
  }

  handleViewModeChange(e) {
    this.setState({
      viewMode: e,
    });
  }

  render() {
    const resources = [
      { id: 0, name: 'Van' },
      { id: 1, name: 'Instructor' },
      { id: 2, name: 'Bin' },
    ];
    return (
      <React.Fragment>
        <div>
          <h1>Calendar</h1>
          <h2>{this.state.viewMode} view</h2>
          <div className="form-inline">
            <div className="col-md-4">
              <input type="date" className="form-control" />
              <SimpleDropdown items={resources} />
            </div>
            <div className="col-md-4 col-md-offset-4">
              <ToggleButtonGroup bsClass="pull-right btn-group" name="viewMode" type="radio" onChange={this.handleViewModeChange} value={this.state.viewMode}>
                <ToggleButton value="Day">Day</ToggleButton>
                <ToggleButton value="Week">Week</ToggleButton>
                <ToggleButton value="Month">Month</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <br />
          {this.state.viewMode === 'Week' && <WeekView />}
          {this.state.viewMode === 'Day' && <DayView />}
        </div>
      </React.Fragment>
    );
  }
}
