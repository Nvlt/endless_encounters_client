import React from 'react';
import ReactDom from 'react-dom';
import Login from '../routes/Login/Login';

it('renders Login without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Login />, div);

  ReactDom.unmountComponentAtNode(div);
});