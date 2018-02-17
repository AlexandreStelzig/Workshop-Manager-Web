import React, { Component } from 'react';
import WeekView from '../components/calendar/WeekView';
import SimpleDropdown from '../components/editors/SimpleDropdown';

export default class CalendarPage extends Component {
  constructor() {
    super();
    this.state = { viewMode: 'Week' };
    this.handleViewModeChange = this.handleViewModeChange.bind(this);
  }

  handleViewModeChange(e) {
    this.setState({
      viewMode: e.target.value,
    });
  }

  renderGroupButton() {
    return (
      <div className="btn-group btn-group-toggle float-right">
        <label htmlFor="op1" className={`btn btn-secondary ${this.state.viewMode === 'Day' ? ' active' : ''}`} >
          <input id="op1" type="radio" name="viewModeRadio" value="Day" onChange={this.handleViewModeChange} /> Day
        </label>
        <label htmlFor="op2" className={`btn btn-secondary ${this.state.viewMode === 'Week' ? ' active' : ''}`}>
          <input id="op2" type="radio" name="viewModeRadio" value="Week" onChange={this.handleViewModeChange} /> Week
        </label>
        <label htmlFor="op3" className={`btn btn-secondary ${this.state.viewMode === 'Month' ? ' active' : ''}`}>
          <input id="op3" type="radio" name="viewModeRadio" value="Month" onChange={this.handleViewModeChange} /> Month
        </label>
      </div>);
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
            <div className="offset-md-4 col-md-4">
              {this.renderGroupButton()}
            </div>
          </div>
          {this.state.viewMode === 'Week' && <WeekView />}
        </div>
      </React.Fragment>
    );
  }
}
