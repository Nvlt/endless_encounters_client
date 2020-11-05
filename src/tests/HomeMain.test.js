import React from 'react';
import ReactDom from 'react-dom';
import HomeMain from '../components/HomeMain/HomeMain';

it('renders HomeMain without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<HomeMain />, div);

  ReactDom.unmountComponentAtNode(div);
});