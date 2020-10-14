import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';

export default class Header extends Component {
  static contextType = UserContext;

  renderLogout = () => {
    return <div className="flex-1">
      <Link
        onClick={this.context.processLogout}
        to='/login'>
        <button>Logout</button>
      </Link>
    </div>
  }

  renderLogin = () => {
    return <>
      <div className="flex-1">
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
      <div className="flex-1">
        <Link to='/register'>
          <button>Register</button>
        </Link>
      </div>
    </>
  }
  render () {
    return (
      <nav className="border flex flex-row-wrap flex-1 width-full">
        <div className="flex-1">{TokenService.hasAuthToken()
          ? this.context.user.username
          : 'Not Logged in'}
        </div>


        <div className="flex-1">
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div>
        
        
        <div className="flex-1">
          <Link to='/about'>
            <button>About</button>
          </Link>
        </div>
        
        
        {TokenService.hasAuthToken()
          ? this.renderLogout()
          : this.renderLogin()}
        
      </nav>
    )
}
}