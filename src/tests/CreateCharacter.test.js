import React from 'react';
import ReactDom from 'react-dom';
import CreateCharacter from '../components/CreateCharacter/CreateCharacter';

it('renders CreateCharacter without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<CreateCharacter />, div);

  ReactDom.unmountComponentAtNode(div);
});