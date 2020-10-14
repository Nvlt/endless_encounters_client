import React from 'react';
import './App.css';
import Home from '../../routes/Home/Home';
import Header from '../Header/Header';
import Register from '../../routes/Register/Register';
import Login from '../../routes/Login/Login';
import Dashboard from '../../routes/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App center font-mono width-full">
      <header className="App-header center width-full">
        <Header />
      </header>

      <Switch>
        <Route
          exact
          path='/'
          component={Home} />
        <Route
          path='/register'
          component={Register} />
        <Route 
          path='/login'
          component={Login} />
        <Route
          path='/main'
          component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;