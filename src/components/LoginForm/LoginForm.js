import { Component } from 'react';
import TokenService from '../../services/token-service';

export default class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password } = e.target;

    console.log(email, username, password);
    email = '';
    username = '';
    password = '';

    //Insert fetch to back end here
    TokenService.saveAuthToken(TokenService.makeAuthToken(username.value, password.value));
  }

  render() {
    return (
      <form className='login-form'
        onSubmit={this.handleSubmit}>
          <div className='input-container'>
            <label htmlFor='email'>Email: </label>
            <input name='email' type='text' placeholder='Something@bozo.com'/>
            <label htmlFor='username'>Username: </label>
            <input name='username' type='text' placeholder='AwesomeKnite420202020'/>
            <label htmlFor='password'>Password: </label>
            <input name='password' type='password' placeholder='Asdfsd32'/>
          </div>
          <div className='button-container'>
            <button className='login-button' type='submit'>Login</button>
            <button className='facebook-button'>Login with Facebook</button>
            <Link to='/register'>Don't have an account?</Link>
          </div>
      </form>
    )
  }
}