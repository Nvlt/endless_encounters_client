import React from 'react';
import ReactDom from 'react-dom';
import Register from '../routes/Register/Register';

it('renders Register without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Register />, div);

  ReactDom.unmountComponentAtNode(div);
});