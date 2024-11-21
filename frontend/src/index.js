import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure this is imported

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
