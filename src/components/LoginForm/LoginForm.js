import React from 'react';
import UserContext from '../../contexts/UserContext';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css'

export default class Login extends React.Component {
  static contextType = UserContext;
  state = { error: null };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, userpass } = e.target;
    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: userpass.value
    })
      .then(res => {
        username.value = '';
        userpass.value = '';
        this.context.processLogin(res.authToken);
      })
      .catch(res => {
        this.setState({ error: res.error });
      })
  }

  render() {
    return (
      <main>

        {
        this.state.error &&
          <div className='error'>{this.state.error}</div>
        }
          
          <form className="form" onSubmit={this.handleSubmit}>

            <div className="row">
              <label htmlFor="username" className="flex-1">User Name</label>
              <input type="text" name="username" id='username'
                className="" />
            </div>

            <div className="row">
              <label htmlFor="userpass" className="flex-1">Password</label>
              <input type="password" name="userpass" id="userpass"
                className="" />
            </div>

            <div className="">
              <button className="loginBtn" type="submit">Login</button>
              <button className="loginBtn">Login With Facebook</button>
            </div>
          </form>
      </main>
    )
  }
}
