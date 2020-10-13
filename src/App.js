import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App center font-mono width-full">
      <header className="App-header center width-full">
        <Header />
      </header>
      {/* <Home />
      <Registration />
      <Login /> */}

      <Dashboard />
    </div>
  );
}

export default App;
