import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import headerStyles from './Header.module.css';

export default class Header extends Component {
  static contextType = UserContext;

  renderLogout = () => {
    return <div >
      <Link
        onClick={this.context.processLogout}
        to='/login'>
        <button>Logout</button>
      </Link>
    </div>
  }

  renderLogin = () => {
    return <>
      <div >
        <Link to='/login'>
          <a>Login</a>
        </Link>
      </div>
      <div >
        <Link to='/register'>
          <a>Register</a>
        </Link>
      </div>
    </>
  }
  render () {
    return (
      <nav className={headerStyles.nav}>
        <div >{TokenService.hasAuthToken()
          ? this.context.user.username
          : null}
        </div>

        <div >
          <Link to='/'>
            <a>Home</a>
          </Link>
        </div>

        <div >
          <Link to='/main'>
            <a>Dash</a>
          </Link>
        </div>
        
        
        <div >
          <Link to='/about'>
            <a>About</a>
          </Link>
        </div>
        
        
        {TokenService.hasAuthToken()
          ? this.renderLogout()
          : this.renderLogin()}
        
      </nav>
    )
}
}