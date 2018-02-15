import React, { Component } from 'react';
import SimpleDropdown from '../editors/SimpleDropdown';

export default class WeekView extends Component {
  render() {
    const resources = [
      { id: 0, name: 'Van' },
      { id: 1, name: 'Instructor' },
      { id: 2, name: 'Bin' },
    ];

    return (
      <div>
        <h2>Week view</h2>
        <div className="form-inline">
          <div className="col-md-4">
            <input type="date" className="form-control" />
            <SimpleDropdown items={resources} />
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
              <label htmlFor="option1" className="btn btn-secondary">
                <input type="radio" name="options" id="option1" autoComplete="off" /> Day
              </label>
              <label htmlFor="option2" className="btn btn-secondary active">
                <input type="radio" name="options" id="option2" autoComplete="off" defaultChecked /> Week
              </label>
              <label htmlFor="option3" className="btn btn-secondary">
                <input type="radio" name="options" id="option3" autoComplete="off" /> Month
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
