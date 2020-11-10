import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App/App';

it('it renders App without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, div);

  ReactDom.unmountComponentAtNode(div);
});