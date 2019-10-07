import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3>Sign into your account</h3>
        <form >
          <label>
            Email:<br/>
          <input type="text"/>
          </label><br/>
          <label>
            Password:<br/>
          <input type="text"/>
          </label><br/>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}
