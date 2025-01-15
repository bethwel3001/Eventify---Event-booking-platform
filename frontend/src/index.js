import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure this is imported from the correct module
import Home from './pages/Home';
import Events from './components/Events';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
