import React, { Component } from 'react';


const workshops = [
  {
    id: 0, name: '3D Printing', description: 'Learn about 3D printing', availability: '3/15/2018-7/15/018',
  },
  {
    id: 1, name: 'Bebop', description: 'Bee-Bot is an award-winning programmable robot, perfect for teaching orientation, sequencing, estimation and programming to young children.',  availability: '3/15/2018-7/15/018',
  },
];

export default class WorkshopsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Workshops</h1>
        </div>
        <div>
          <BootstrapTable
            data={workshops}
            hover
            striped
            condensed
            pagination
            search
            insertRow
            searchPlaceholder="Filter resources..."
          >
            <TableHeaderColumn dataField="id" isKey hidden hiddenOnInsert searchable={false} autoValue>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort >Name</TableHeaderColumn>
            <TableHeaderColumn dataField="description" dataSort>Description</TableHeaderColumn>
            <TableHeaderColumn dataField="availability" dataSort >Availability</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </React.Fragment>
    );
  }
}
