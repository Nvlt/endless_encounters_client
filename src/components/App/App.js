import React from 'react';

import Home from '../../routes/Home/Home';
import Header from '../Header/Header';
import Register from '../../routes/Register/Register';
import Login from '../../routes/Login/Login';
import Dashboard from '../../routes/Dashboard/Dashboard';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../../routes/routehelpers/PrivateRoute/PrivateRoute';
import PublicRoute from '../../routes/routehelpers/PublicRoute/PublicRoute';
import About from '../../routes/About/About';

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
        <PublicRoute
          path='/register'
          component={Register} />
        <PublicRoute
          path='/login'
          component={Login} />
        <PublicRoute
          path='/about'
          component={About} />
        <PublicRoute
          path='/main'
          component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
