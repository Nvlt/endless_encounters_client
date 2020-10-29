/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {UserProvider} from './contexts/UserContext';
import {BrowserRouter} from 'react-router-dom';
import {CharacterProvider} from './contexts/CharacterContext';
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './firebaseConfig';
import {
  FirebaseAuthProvider,

  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
ReactDOM.render(
  <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
    <BrowserRouter>
      <UserProvider>
        <CharacterProvider>
          <App />
        </CharacterProvider>
      </UserProvider>
    </BrowserRouter>
  </FirebaseAuthProvider>,
  document.getElementById('root')
);
