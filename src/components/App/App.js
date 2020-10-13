import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../HomeMain/HomeMain';
import Header from '../../Header';
import Registration from '../RegistrationForm/RegistrationForm';
import Login from '../LoginForm/LoginForm';
import Dashboard from '../DashboardMain/DashboardMain';

function App() {
  return (
    <div className="App center font-mono width-full">
      <header className="App-header center width-full">
        <Header />
      </header>
      <Switch>
        {/* <Home />
        <Registration />
        <Login /> */}

        <Dashboard />
      </Switch>
    </div>
  );
}

export default App;
