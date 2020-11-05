import React from 'react';
import ReactDom from 'react-dom';
import Combat from '../components/Combat/Combat';

it('renders Combat without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Combat />, div);

  ReactDom.unmountComponentAtNode(div);
});