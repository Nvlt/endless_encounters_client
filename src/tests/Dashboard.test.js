import React from 'react';
import ReactDom from 'react-dom';
import Dashboard from '../routes/Dashboard/Dashboard';

it('renders Dashboard without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Dashboard />, div);

  ReactDom.unmountComponentAtNode(div);
});