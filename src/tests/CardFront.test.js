import React from 'react';
import ReactDom from 'react-dom';
import CardFront from '../components/DashBoardComponents/CardFront/CardFront';

it('renders CardFront without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<CardFront />, div);

  ReactDom.unmountComponentAtNode(div);
});