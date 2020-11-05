import React from 'react';
import ReactDom from 'react-dom';
import Abilities from '../components/DashBoardComponents/Abilities/Abilities';

it('renders Abilities without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Abilities />, div);

  ReactDom.unmountComponentAtNode(div);
});