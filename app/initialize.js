import {BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.querySelector('#app')
  );
});
