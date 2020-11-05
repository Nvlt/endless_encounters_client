import React from 'react';
import ReactDom from 'react-dom';
import CombatTextBox from '../components/CombatTextBox/CombatTextBox';

it('renders CombatTextBox without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<CombatTextBox />, div);

  ReactDom.unmountComponentAtNode(div);
});