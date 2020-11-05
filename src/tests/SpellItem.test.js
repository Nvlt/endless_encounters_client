import React from 'react';
import ReactDom from 'react-dom';
import SpellItem from '../components/DashBoardComponents/SpellItem/SpellItem';

it('renders SpellItem without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<SpellItem />, div);

  ReactDom.unmountComponentAtNode(div);
});