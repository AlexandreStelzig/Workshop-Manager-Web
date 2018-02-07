import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [{
  dataField: 'status',
  text: 'Status',
  sort: true
},{
  dataField: 'dateSubmitted',
  text: 'Date Submitted',
  sort: true
},{
  dataField: 'school',
  text: 'School',
  sort: true
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}, {
  dataField: 'email',
  text: 'Email',
  sort: true
}, {
  dataField: 'id',
  text: 'ID',
  sort: true,
  hidden: true
},];

const registrations = [
{ id: 0, status: 0, dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Soprano', email: 'alexia@gmail.com'},
{ id: 1, status: 0, dateSubmitted: '02/02/2018', school: 'St-Medard', name: 'Simon François', email: 'simon123@gmail.com'},
{ id: 2, status: 1, dateSubmitted: '01/02/2018', school: 'Grande-Rivière', name: 'Simon Pauletier', email: 'simon11@gmail.com'},
{ id: 3, status: 1, dateSubmitted: '03/01/2018', school: 'UOttawa', name: 'Aimy Salazar', email: 'aimy@gmail.com'},
{ id: 4, status: 2, dateSubmitted: '04/01/2018', school: 'Scouts', name: 'Johanne Doe', email: 'johanneDoe@gmail.com'},
{ id: 5, status: 2, dateSubmitted: '07/01/2018', school: 'Petit-Ruisseau', name: 'Paul Boris', email: 'paulBoris@gmail.com'},
{ id: 6, status: 3, dateSubmitted: '18/01/2018', school: 'École élémentaire St-Jean De Bréboeuf', name: 'Amy Sandiago', email: 'amy@gmail.com'},
{ id: 7, status: 3, dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Diaz', email: 'al@gmail.com'},
{ id: 8, status: 4, dateSubmitted: '01/02/2018', school: 'St-Medard', name: 'Jake Travolta', email: 'travolta@gmail.com'},
{ id: 9, status: 0, dateSubmitted: '01/01/2018', school: 'St-Medard', name: 'Alexia Soprano', email: 'soprano@gmail.com'},
{ id: 10, status: 0, dateSubmitted: '02/02/2018', school: 'St-Medard', name: 'Simon François', email: 'sFran@gmail.com'},
{ id: 11, status: 1, dateSubmitted: '01/02/2018', school: 'Grande-Rivière', name: 'Alex Rider', email: 'aRider@gmail.com'}
];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  hideSelectColumn: true,
  onSelect: (row, isSelect, rowIndex) => {
    alert('Opening registration : ' + registrations[row.id].name);
    console.log(row);
  }
};


const selectYearsOptions = {
  0: 2018,
  1: 2017,
  2: 2016
};
const progBar = {
  width: '25%'
};

function indication() {
  // return something here
 return "No Data";
}
const pagination = {
  paginationSize: 1,
  hideSizePerPage: true, // Hide the sizePerPage dropdown always
  
};

export default class RegistrationsPage extends Component {
  render() {
    return (
    	<React.Fragment>
		    <div>
		  		<h1>Registrations</h1>
		  		<p>It will show all applications acording to their statuses.</p>
	    	</div>
        <div className="row">
          <div className="col-md-3">
          100 out of 400
          </div>
          <div className="col-md-9">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={progBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="col-md-3">
          100 out of 400
          </div>
          <div className="col-md-9">
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={progBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-3">
            <input className="form-control" type="text" placeholder="Search"/>
          </div>
          <div className="col-md-3">
            
          </div>
          <div className="col-md-3">
            <select className="selectpicker form-control">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Sent</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="selectpicker form-control">
              <option>All Years</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
            </select>
          </div>
        </div>
        <BootstrapTable keyField='id' data={ registrations } columns={ columns } 
        striped hover condensed noDataIndication={ indication()} selectRow={ selectRow }
        pagination={ paginationFactory(pagination) }/>
    	</React.Fragment>
   	);
  }
}
