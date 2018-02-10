import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


ReactDOM.render(
  <React.Fragment>
    <div className="container">
      <App />
    </div>
  </React.Fragment>,
  document.getElementById('root'),
);
registerServiceWorker();
