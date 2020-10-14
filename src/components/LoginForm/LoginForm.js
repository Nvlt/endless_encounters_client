import React from 'react';
import UserContext from '../../contexts/UserContext';
import AuthApiService from '../../services/auth-api-service';

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
      <main className="flex flex-col center flex-1 width-full">

        {
        this.state.error &&
          <div className='error'>{this.state.error}</div>
        }

        <div className="flex-1 flex  center p-2 mt-4 justify-stretch">
          
          <form className="boxshadow rounded-lighter flex-1 flex-grow flex flex-col center  m-2" onSubmit={this.handleSubmit}>

            <div className="flex flex-row flex-1 mx-2 max-width-80 font-lg">
              <label htmlFor="username" className="flex-1">User Name</label>
              <input type="text" name="username" id='username'
                className="flex-1 width-full font-lg border-none border-b" />
            </div>

            <div className="flex flex-row flex-1 mx-2 max-width-80 font-lg">
              <label htmlFor="userpass" className="flex-1">Password</label>
              <input type="password" name="userpass" id="userpass"
                className="flex-1 width-full font-lg border-none border-b" />
            </div>

            <div className="flex-1 flex flex-col justify-around">
              <button className="flex-1 m-1 boxshadow-light border-none rounded-lighter" type="submit">Login</button>
              <button className="flex-2 m-1 boxshadow-light border-none rounded-lighter">Login With Facebook</button>
            </div>
          </form>
        </div>
      </main>
    )
  }
}