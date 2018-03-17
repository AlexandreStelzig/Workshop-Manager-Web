import React from 'react';
import ReactDOM from 'react-dom';
// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

// OfflinePluginRuntime.install();

ReactDOM.render(
  <div className="container">
    <App />
  </div>,
  document.getElementById('root'),
);
