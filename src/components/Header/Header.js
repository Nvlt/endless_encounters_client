import { Component } from 'react';
import TokenService from '../../services/token-service';

export default class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <Link to='/'><h1>Endless Encounters</h1></Link>
        
      </nav>
    )
  }
}