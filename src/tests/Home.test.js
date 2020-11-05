import React from 'react';
import ReactDom from 'react-dom';
import Home from '../routes/Home/Home';

it('renders Home without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Home />, div);

  ReactDom.unmountComponentAtNode(div);
});