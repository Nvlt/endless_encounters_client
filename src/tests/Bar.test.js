import React from 'react';
import ReactDom from 'react-dom';
import Bar from '../components/DashBoardComponents/Bar/Bar';

it('renders Bar without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Bar />, div);

  ReactDom.unmountComponentAtNode(div);
});