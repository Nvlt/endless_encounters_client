import React from 'react';
import ReactDom from 'react-dom';
import PublicRoute from '../routes/routehelpers/PublicRoute/PublicRoute';

it('renders PublicRoute without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<PublicRoute />, div);

  ReactDom.unmountComponentAtNode(div);
});