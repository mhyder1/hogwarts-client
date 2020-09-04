import React from 'react';



export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="LoginForm">
        <h3>
          Login to your account:
        </h3>
        <form id="login-form" action="form-link" method="POST">
          <label for="user-name">Username:</label>
          <input id="user-name" type="text" name="name"/>
          <label for="user-password">Password:</label>
          <input id="user-password" type="text" name="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
