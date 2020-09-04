import React from 'react';



export default class SignUpForm extends React.Component {
  render() {
    return (
      <div className="SignUpForm">
        <h3>
          Sign up for a new account:
        </h3>
        <form id="sign-up-form" action="form-link" method="POST">
          <label for="new-username">Username:</label>
          <input id="new-username" type="text" name="name"/>
          <label for="new-user-password">Password:</label>
          <input id="new-user-password" type="text" name="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
