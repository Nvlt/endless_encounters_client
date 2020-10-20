import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {UserProvider} from './contexts/UserContext';
import {BrowserRouter} from 'react-router-dom';
import {CharacterProvider} from './contexts/CharacterContext';
import FirebaseProvider from './firebase/firebase'
ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CharacterProvider>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </CharacterProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
