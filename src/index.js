import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import UserProvder from './contexts/UserContext';

ReactDOM.render(
  <UserProvder>
    <App />
  </UserProvder>,
  document.getElementById('root')
);