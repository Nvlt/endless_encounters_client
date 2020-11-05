import React from 'react';
import ReactDom from 'react-dom';
import CardBack from '../components/DashBoardComponents/CardBack/CardBack';

it('renders CardBack without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<CardBack />, div);

  ReactDom.unmountComponentAtNode(div);
});