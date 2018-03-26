import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class SettingsPage extends Component {
  constructor() {
    super();
    this.onSelectOptionOneChange = this.onSelectOptionOneChange.bind(this);
  }

  onSelectOptionOneChange() { 
  // example of on change
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Settings</h1>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <ControlLabel>Select Settings Example (1)</ControlLabel>
          </div>
          <div className="col-md-6">
            <FormGroup controlId="formControlsSelect1">
              <FormControl
                componentClass="select"
                placeholder="select"
                onChange={this.onSelectOptionOneChange}
              >
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
                <option value="option4">Option4</option>
                <option value="option5">Option5</option>
              </FormControl>
            </FormGroup>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <ControlLabel>Select Settings Example (2)</ControlLabel>
          </div>
          <div className="col-md-6">
            <FormGroup controlId="formControlsSelect2">
              <FormControl
                componentClass="select"
                placeholder="select"
              >
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </FormControl>
            </FormGroup>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <ControlLabel>Checkbox Settings Example</ControlLabel>
          </div>
          <div className="col-md-6">
            <FormGroup controlId="formControlsSelect3">
              <input
                name="isGoing"
                type="checkbox"
              />
            </FormGroup>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <ControlLabel>RadioButton Settings Example</ControlLabel>
          </div>
          <div className="col-md-6">
            <FormGroup controlId="formControlsSelect3">
              <input type="radio" value="option1" checked="checked" name="radiobuttonsettings" /> Option 1
              <input type="radio" value="option2" name="radiobuttonsettings" /> Option 2
              <input type="radio" value="option3" name="radiobuttonsettings" /> Option 3
            </FormGroup>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
