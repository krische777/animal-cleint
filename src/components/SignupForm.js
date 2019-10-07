import React, { Component } from 'react'

export default class SginupForm extends Component {
  render() {
    return (
      <div>
        <h2>Create new account</h2>
        <form >
          <label >
            First Name:<br/>
            <input type="text"/>
          </label><br/>
          <label >
            Email:<br/>
            <input type="text"/>
          </label><br/>
          <label >
            Password:<br/>
            <input type="text"/>
          </label><br/>
          <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}
