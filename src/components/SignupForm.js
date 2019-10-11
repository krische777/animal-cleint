import React, { Component } from 'react'

export default class SginupForm extends Component {
  render() {
    return (
      <div>
        <h2>Create new account</h2>
        <form onSubmit={this.props.onSubmit}>
          <label >
            First Name:<br />
            <input type="text" name="firstName" value={this.props.values.firstName} onChange={this.props.onChange} />
          </label><br />
          <label >
            Email:<br />
            <input type="text" name='email' value={this.props.values.email} onChange={this.props.onChange} />
          </label><br />
          <label >
            Password:<br />
            <input type="text" name='password' value={this.props.values.password} onChange={this.props.onChange} />
          </label><br />
          <input type="submit" value="Signup" />
        </form>
      </div>
    )
  }
}
