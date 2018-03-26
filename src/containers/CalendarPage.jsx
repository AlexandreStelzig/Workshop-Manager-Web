import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import styled from 'styled-components';
import WeekView from '../components/calendar/WeekView';
import DayView from '../components/calendar/DayView';
import MonthView from '../components/calendar/MonthView';
import SimpleDropdown from '../components/editors/SimpleDropdown';

const TopCalContainer = styled.div`
  overflow: hidden;
  padding-bottom: 15px;
`;

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

    const items = [{
      id: 0,
      schoolName: 'Ecole des Rapides-Deschenes',
      status: 'Confirmed',
      startDateTime: new Date(2018, 1, 2, 8, 30),
      endDateTime: new Date(2018, 1, 2, 12, 0),
      workshops: ['3D Printing', 'Electricity'],
      resource: 'Van 1',
    }];
    const initialFirstDayOfWeek = new Date(2018, 1, 1);

    return (
      <React.Fragment>
        <div>
          <h1>Calendar</h1>
          <h2>{this.state.viewMode} view</h2>
          <TopCalContainer className="form-inline">
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
          </TopCalContainer>
          {this.state.viewMode === 'Week' && <WeekView items={items} initialFirstDayOfWeek={initialFirstDayOfWeek} />}
          {this.state.viewMode === 'Day' && <DayView items={items} />}
          {this.state.viewMode === 'Month' && <MonthView />}
        </div>
      </React.Fragment>
    );
  }
}
