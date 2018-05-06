import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, ControlLabel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
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

function mapWorkshop(workshop) {
  return <option key={workshop.id} value={workshop.id}>{workshop.name}</option>;
}

const cellEditProperties = {
  mode: 'click',
  blurToSave: true,
};
const selectRow = {
  mode: 'radio',
};

export default class WorkshopInformation extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formValues;
    this.handleChange = this.handleChange.bind(this);
    this.handleWorkshopChange = this.handleWorkshopChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  handleWorkshopChange(e) {
    this.setState({
      selectWorkshop: e.target.value,
      selectedName: workshopList[e.target.value].name,
      selectedDescription: workshopList[e.target.value].description,
    });
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  previousStep() {
    this.props.saveValues(this.state);
    this.props.handleBack();
  }

  render() {
    return (
      <Grid>
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
          <Col md={2} />
          <Col md={4}>
            <h3>Step 3 of 3</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={3}>
            <ControlLabel>Preferred date</ControlLabel>
            <input type="date" id="preferredDatePicker" name="preferredDate" value={this.state.preferredDate} onChange={this.handleChange} />
          </Col>
          <Col md={3}>
            <ControlLabel>Alternative date</ControlLabel>
            <input type="date" id="alternateDatePicker" name="alternateDate" value={this.state.alternateDate} onChange={this.handleChange} />
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
              <TableHeaderColumn dataField="groupName" editable={{ type: 'select', options: { values: ['Select group', this.state.teachers.groupName] } }}>Group Name</TableHeaderColumn>
              <TableHeaderColumn dataField="teacher">Teacher</TableHeaderColumn>
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
            <Button onClick={this.previousStep}>Back to teacher information</Button>
          </Col>
          <Col md={8} />
          <Col md={2}>
            <Button bsStyle="primary" onClick={this.props.handleSubmit}>Submit Registration</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

WorkshopInformation.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  saveValues: PropTypes.func.isRequired,
};
