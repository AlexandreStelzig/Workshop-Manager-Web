import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Tabs, Tab, Button, Well } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const workshopList = [
  {
    id: 0, name: '3D Printing', description: 'Learn about 3D printing!',
  },
  {
    id: 1, name: 'Electricity', description: 'An electrifying workshop.',
  },
  {
    id: 2, name: 'Bebot', description: 'Bee-Bot is an award-winning programmable robot, perfect for teaching orientation, sequencing, estimation and programming to young children.',
  },
];
const cellEditProperties = {
  mode: 'click',
  blurToSave: true,
};
const selectRow = {
  mode: 'radio',
};

function numberValidator(value) {
  const nan = Number.isNaN(parseInt(value, 10));
  if (nan) {
    return 'Number of boys/girls must be a number.';
  }
  return true;
}

function mapWorkshop(workshop) {
  return <option key={workshop.id} value={workshop.id}>{workshop.name}</option>;
}

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactFirstName: '',
      contactLastName: '',
      contactEmail: '',
      contactPhone: '',
      groupKey: 1,
      groupName: '',
      schoolBoard: '',
      language: 'English',
      schoolType: 'Elementary',
      address: '',
      city: '',
      region: 'Ottawa-Gatineau',
      province: 'Ontario',
      postalCode: '',
      orgPhone: '',
      schoolFax: '',
      schoolAudience: 'General Youth',
      schoolSchedule: [],
      teachers: [],
      selectWorkshop: -1,
      registeredWorkshops: [],
      selectedDescription: 'Select a workshop using the dropdown list above.',
      selectedName: 'Select workshop',
      comments: '',
      autogenId: 0,
      workshopLocation: 'Your location',
      preferredDate: '',
      alternateDate: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleWorkshopChange = this.handleWorkshopChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleWorkshopChange(e) {
    this.setState({
      selectWorkshop: e.target.value,
      selectedName: workshopList[e.target.value].name,
      selectedDescription: workshopList[e.target.value].description,
    });
  }

  handleSelect(newKey) {
    this.setState({ groupKey: newKey });
  }

  handlePageSelect(newKey) {
    this.setState({ pageKey: newKey });
  }

  handleNext() {
    this.setState({ pageKey: 2 });
  }

  handleAdd() {
    if (this.state.selectWorkshop >= 0) {
      const newAutogen = this.state.autogenId + 1;
      this.state.registeredWorkshops.push({
        id: this.state.autogenId, topic: this.state.selectedName, groupName: 'Select group', teacher: '', time: 'Select time',
      });
      this.setState({ autogenId: newAutogen });
    }
  }

  handleBack() {
    this.setState({ pageKey: 1 });
  }

  handleSubmit() {
    alert('Form submitted!'); // eslint-disable-line no-alert
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Col md={12}>
              <h1>Registration Form</h1>
            </Col>
          </Row>
          <form>
            <Tabs
              activeKey={this.state.pageKey}
              onSelect={this.handlePageSelect}
              id="pageTab"
            >
              <Tab eventKey={1} title="Group information">
                <FormGroup
                  controlId="formContactInformation"
                >
                  <Row>
                    <Col md={4} />
                    <Col md={4}>
                      <h3> Contact information </h3>
                    </Col>
                    <Col md={4} />
                  </Row>
                  <Row>
                    <Col md={2} />
                    <Col md={4}>
                      <ControlLabel>First name</ControlLabel>
                      <FormControl
                        type="text"
                        name="contactFirstName"
                        value={this.state.contactFirstName}
                        placeholder="Contact first name"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={4}>
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        type="email"
                        name="contactEmail"
                        value={this.state.contactEmail}
                        placeholder="example@example.com"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={2} />
                  </Row>
                  <Row>
                    <Col md={2} />
                    <Col md={4}>
                      <ControlLabel>Last name</ControlLabel>
                      <FormControl
                        type="text"
                        name="contactLastName"
                        value={this.state.contactLastName}
                        placeholder="Contact last name"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={4}>
                      <ControlLabel>Phone number</ControlLabel>
                      <FormControl
                        type="tel"
                        name="contactPhone"
                        value={this.state.contactPhone}
                        placeholder="(###) ###-####"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md={2} />
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
                    <Col md={2} />
                    <Col md={8}>
                      <Tabs
                        activeKey={this.state.groupKey}
                        onSelect={this.handleSelect}
                        id="groupTab"
                      >
                        <Tab eventKey={1} title="School">
                          <Row>
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
                    <Col md={2} />
                  </Row>
                  <br />
                  <Row>
                    <Col md={9} />
                    <Col md={3}>
                      <Button bsStyle="primary" onClick={this.handleNext}>Next</Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Tab>
              <Tab eventKey={2} title="Workshops selection">
                <Row>
                  <Col md={4}>
                    <h3>Teachers</h3>
                  </Col>
                  <Col md={8} />
                </Row>
                <Row>
                  <Col md={12}>
                    <BootstrapTable
                      data={this.state.teachers}
                      hover
                      condensed
                      insertRow
                      cellEdit={cellEditProperties}
                    >
                      <TableHeaderColumn dataField="id" isKey autoValue hidden hiddenOnInsert>Id</TableHeaderColumn>
                      <TableHeaderColumn dataField="group">Group</TableHeaderColumn>
                      <TableHeaderColumn dataField="teacher">Teacher</TableHeaderColumn>
                      <TableHeaderColumn dataField="boys" editable={{ validator: numberValidator }}>Boys</TableHeaderColumn>
                      <TableHeaderColumn dataField="girls" editable={{ validator: numberValidator }}>Girls</TableHeaderColumn>
                      <TableHeaderColumn dataField="grade">Grade</TableHeaderColumn>
                      <TableHeaderColumn dataField="language" editable={{ type: 'select', options: { values: ['English', 'French'] } }} >Language</TableHeaderColumn>
                    </BootstrapTable>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <h3>Workshops</h3>
                  </Col>
                  <Col md={3}>
                    <br />
                    <FormControl
                      componentClass="select"
                      name="workshopLocation"
                      value={this.state.workshopLocation}
                      onChange={this.handleChange}
                    >
                      <option value="Your location" >Your location</option>
                      <option value="On campus" >On campus</option>
                    </FormControl>
                  </Col>
                  <Col md={6} />
                </Row>
                <br />
                <Row>
                  <Col md={3}>
                    <ControlLabel>Preferred date</ControlLabel>
                    <input type="date" id="preferredDatePicker" name="preferredDate" value={this.state.preferredDate} />
                  </Col>
                  <Col md={3}>
                    <ControlLabel>Alternative date</ControlLabel>
                    <input type="date" id="alternateDatePicker" name="alternateDate" value={this.state.alternateDate} />
                  </Col>
                  <Col md={3} />
                </Row>
                <br />
                <Row>
                  <Col md={3}>
                    <FormControl
                      componentClass="select"
                      name="selectWorkshop"
                      value={this.state.selectWorkshop}
                      onChange={this.handleWorkshopChange}
                    >
                      <option value="-1" disabled>Select workshop</option>
                      {
                        workshopList.map(mapWorkshop)
                      }
                    </FormControl>
                  </Col>
                  <Col md={9} />
                </Row>
                <br />
                <Row>
                  <Col md={8}>
                    <Well>
                      <h2>{this.state.selectedName}</h2>
                      <blockquote>
                        {this.state.selectedDescription}
                      </blockquote>
                    </Well>
                  </Col>
                  <Col md={4}>
                    <Button bsStyle="danger" onClick={this.handleAdd}>Add</Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <BootstrapTable
                      data={this.state.registeredWorkshops}
                      hover
                      condensed
                      selectRow={selectRow}
                      deleteRow
                      cellEdit={cellEditProperties}
                    >
                      <TableHeaderColumn dataField="id" isKey autoValue hidden>Id</TableHeaderColumn>
                      <TableHeaderColumn dataField="topic" editable={false}>Topic</TableHeaderColumn>
                      <TableHeaderColumn dataField="groupName" editable={{ type: 'select', options: { values: ['Select group'] } }}>Group Name</TableHeaderColumn>
                      <TableHeaderColumn dataField="teacher">Teacher</TableHeaderColumn>
                      <TableHeaderColumn dataField="time" editable={{ type: 'select', options: { values: ['Select time'] } }} >Time (optional)</TableHeaderColumn>
                    </BootstrapTable>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12}>
                    <ControlLabel>Comments</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      placeholder="Enter comments or other information here."
                      name="comments"
                      value={this.state.comments}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={2}>
                    <Button onClick={this.handleBack}>Back to group information</Button>
                  </Col>
                  <Col md={8} />
                  <Col md={2}>
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Submit Registration</Button>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </form>
          <br />
          <br />
        </Grid>
      </React.Fragment>
    );
  }
}
