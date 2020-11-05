import React from 'react';
import ReactDom from 'react-dom';
import Viewport from '../components/Viewport/Viewport';

it('renders Viewport without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Viewport />, div);

  ReactDom.unmountComponentAtNode(div);
});