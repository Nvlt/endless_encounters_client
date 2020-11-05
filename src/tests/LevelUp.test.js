import React from 'react';
import ReactDom from 'react-dom';
import LevelUp from '../components/LevelUp/LevelUp';

it('renders LevelUp without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<LevelUp />, div);

  ReactDom.unmountComponentAtNode(div);
});