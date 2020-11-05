import React from 'react';
import ReactDom from 'react-dom';
import Explore from '../components/Explore/Explore';

it('renders Explore without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Explore />, div);

  ReactDom.unmountComponentAtNode(div);
});