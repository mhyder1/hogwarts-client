import React from 'react';
import TokenService from '../../services/token-service'
import { Button, Input } from '../Utils/Utils'
import "./LoginForm.css"



export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name, password)
    )

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            Username
            <br/>
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
            <br/>
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <br/>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}








// export default class LoginForm extends React.Component {
//   render() {
//     return (
//       <div className="LoginForm">
//         <h3>
//           Login to your account:
//         </h3>
//         <form id="login-form" action="form-link" method="POST">
//           <label for="user-name">Username:</label>
//           <input id="user-name" type="text" name="name"/>
//           <label for="user-password">Password:</label>
//           <input id="user-password" type="text" name="password"/>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
