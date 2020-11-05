import React from 'react';
import ReactDom from 'react-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

it('renders RegistrationForm without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<RegistrationForm />, div);

  ReactDom.unmountComponentAtNode(div);
});