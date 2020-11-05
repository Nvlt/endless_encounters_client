import React from 'react';
import ReactDom from 'react-dom';
import PrivateRoute from '../routes/routehelpers/PrivateRoute/PrivateRoute';

it('renders PrivateRoute without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<PrivateRoute />, div);

  ReactDom.unmountComponentAtNode(div);
});