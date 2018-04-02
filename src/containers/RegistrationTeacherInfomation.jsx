import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

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

export default class RegistrationTeacherInformation extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formValues;
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.binde(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  nextStep() {
    this.props.saveValues(this.state);
    this.props.handleNext();
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Col md={4}>
              <h3>Teachers</h3>
            </Col>
            <Col md={4} />
            <Col md={4}>
              <h3>Step 2 of 3</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Click &quot;new&quot; to add the information of each teacher who will be participating or supervising the workshops.</p>
              <p>If a teacher has multiple classes, enter them as many times as necessary but with a different group name. Please make sure that group names are unique.</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                data={this.state.teachers}
                hover
                condensed
                insertRow
                selectRow={selectRow}
                deleteRow
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
          <br />
          <Row>
            <Col md={2}>
              <Button onClick={this.handleBack}>Back to general information</Button>
            </Col>
            <Col md={8} />
            <Col md={2}>
              <Button bsStyle="primary" onClick={this.nextStep}>Next</Button>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}
