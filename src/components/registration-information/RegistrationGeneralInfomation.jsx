import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProperties = {
  mode: 'click',
  blurToSave: true,
};
const selectRow = {
  mode: 'radio',
};

export default class RegistrationGeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formValues;
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  nextStep() {
    this.props.saveValues(this.state);
    this.props.handleNext();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelect(newKey) {
    this.setState({ groupKey: newKey });
  }

  render() {
    return (
      <Grid>
        <FormGroup
          controlId="formContactInformation"
        >
          <Row>
            <Col md={4} />
            <Col md={4}>
              <h3> Contact information </h3>
            </Col>
            <Col md={4}>
              <h3>Step 1 of 3</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ControlLabel>First name</ControlLabel>
              <FormControl
                type="text"
                name="contactFirstName"
                value={this.state.contactFirstName}
                placeholder="Contact first name"
                onChange={this.handleChange}
              />
            </Col>
            <Col md={6}>
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="email"
                name="contactEmail"
                value={this.state.contactEmail}
                placeholder="example@example.com"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ControlLabel>Last name</ControlLabel>
              <FormControl
                type="text"
                name="contactLastName"
                value={this.state.contactLastName}
                placeholder="Contact last name"
                onChange={this.handleChange}
              />
            </Col>
            <Col md={6}>
              <ControlLabel>Phone number</ControlLabel>
              <FormControl
                type="tel"
                name="contactPhone"
                value={this.state.contactPhone}
                placeholder="(###) ###-####"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup
          controlId="formGroupInformation"
        >
          <Row>
            <Col md={4} />
            <Col md={4}>
              <h3> Group information </h3>
            </Col>
            <Col md={4} />
          </Row>
          <Row>
            <Col>
              <Tabs
                activeKey={this.state.groupKey}
                onSelect={this.handleSelect}
                id="groupTab"
              >
                <Tab eventKey={1} title="School">
                  <Row>
                    <Col md={6}>
                      <ControlLabel>School board</ControlLabel>
                      <FormControl
                        type="text"
                        name="schoolBoard"
                        value={this.state.schoolBoard}
                        placeholder="School board"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <ControlLabel>School name</ControlLabel>
                      <FormControl
                        type="text"
                        name="groupName"
                        value={this.state.groupName}
                        placeholder="School name"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Language</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="language"
                        value={this.state.language}
                        onChange={this.handleChange}
                      >
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                      </FormControl>
                    </Col>
                    <Col md={6}>
                      <ControlLabel>School type</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="schoolType"
                        value={this.state.schoolType}
                        onChange={this.handleChange}
                      >
                        <option value="Elementary">Elementary</option>
                        <option value="High school">High school</option>
                        <option value="CEGEP">CEGEP</option>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Address</ControlLabel>
                      <FormControl
                        type="text"
                        name="address"
                        value={this.state.address}
                        placeholder="123 Rideau St."
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <ControlLabel>City</ControlLabel>
                      <FormControl
                        type="text"
                        name="city"
                        value={this.state.city}
                        placeholder="City"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Region</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="region"
                        value={this.state.region}
                        onChange={this.handleChange}
                      >
                        <option value="Ottawa-Gatineau">Ottawa-Gatineau</option>
                        <option value="GTA">Greater Toronto Area</option>
                        <option value="other">Other</option>
                      </FormControl>
                    </Col>
                    <Col md={6}>
                      <ControlLabel>Province</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="province"
                        value={this.state.province}
                        onChange={this.handleChange}
                      >
                        <option value="Ontario">Ontario</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Colombia">British Colombia</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="PEI">Prince Edward Island</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Yukon">Yukon</option>
                        <option value="NWT">Northwest Territories</option>
                        <option value="Nunavut">Nunavut</option>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Postal Code</ControlLabel>
                      <FormControl
                        type="text"
                        name="postalCode"
                        value={this.state.postalCode}
                        placeholder="A1A1A1"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <ControlLabel>School phone</ControlLabel>
                      <FormControl
                        type="text"
                        name="orgPhone"
                        value={this.state.orgPhone}
                        placeholder="(###) ###-####"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Fax</ControlLabel>
                      <FormControl
                        type="text"
                        name="schoolFax"
                        value={this.state.schoolFax}
                        placeholder="(###) ###-####"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <ControlLabel>Audience</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="schoolAudience"
                        value={this.state.schoolAudience}
                        onChange={this.handleChange}
                      >
                        <option value="General Youth">General Youth</option>
                        <option value="Children">Children</option>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <h3>School schedule</h3>
                    </Col>
                    <Col md={4}>
                      <h4>Please fill or modify the schedule</h4>
                    </Col>
                    <Col md={4} />
                  </Row>
                  <Row>
                    <Col md={12}>
                      <BootstrapTable
                        data={this.state.schoolSchedule}
                        hover
                        condensed
                        insertRow
                        selectRow={selectRow}
                        deleteRow
                        cellEdit={cellEditProperties}
                      >
                        <TableHeaderColumn dataField="blockNumber" isKey>Block #</TableHeaderColumn>
                        <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                        <TableHeaderColumn dataField="startTime">Start Time</TableHeaderColumn>
                        <TableHeaderColumn dataField="endTime">End Time</TableHeaderColumn>
                      </BootstrapTable>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey={2} title="Group">
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Group name</ControlLabel>
                      <FormControl
                        type="text"
                        name="groupName"
                        value={this.state.groupName}
                        placeholder="School name"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <ControlLabel>Language</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="language"
                        value={this.state.language}
                        onChange={this.handleChange}
                      >
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Address</ControlLabel>
                      <FormControl
                        type="text"
                        name="address"
                        value={this.state.address}
                        placeholder="123 Rideau St."
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <ControlLabel>City</ControlLabel>
                      <FormControl
                        type="text"
                        name="city"
                        value={this.state.city}
                        placeholder="City"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Region</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="region"
                        value={this.state.region}
                        onChange={this.handleChange}
                      >
                        <option value="Ottawa-Gatineau">Ottawa-Gatineau</option>
                        <option value="GTA">Greater Toronto Area</option>
                        <option value="other">Other</option>
                      </FormControl>
                    </Col>
                    <Col md={6}>
                      <ControlLabel>Province</ControlLabel>
                      <FormControl
                        componentClass="select"
                        name="province"
                        value={this.state.province}
                        onChange={this.handleChange}
                      >
                        <option value="Ontario">Ontario</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Colombia">British Colombia</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="PEI">Prince Edward Island</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Yukon">Yukon</option>
                        <option value="NWT">Northwest Territories</option>
                        <option value="Nunavut">Nunavut</option>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <ControlLabel>Postal Code</ControlLabel>
                      <FormControl
                        type="text"
                        name="postalCode"
                        value={this.state.postalCode}
                        placeholder="A1A1A1"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <ControlLabel>Phone number</ControlLabel>
                      <FormControl
                        type="text"
                        name="orgPhone"
                        value={this.state.orgPhone}
                        placeholder="(###) ###-####"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={9} />
            <Col md={3}>
              <Button name="pageOneNext" bsStyle="primary" onClick={this.nextStep}>Next</Button>
            </Col>
          </Row>
        </FormGroup>
      </Grid>
    );
  }
}
