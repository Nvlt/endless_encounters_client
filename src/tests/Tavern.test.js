import React from 'react';
import ReactDom from 'react-dom';
import Tavern from '../components/Tavern/Tavern';

it('renders Tavern without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Tavern\ />, div);

  ReactDom.unmountComponentAtNode(div);
});