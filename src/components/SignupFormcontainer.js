import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import {addUser} from '../action'

class SignupFormContainer extends Component {
  state = {
    firstName:'', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.userLogin(this.state.firstName, this.state.email, this.state.password)
    this.setState({
      firstName:'',
      email: '',
      password: '',
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state} />
      </div>
    )
  }
}

export default connect(null, {addUser})(SignupFormContainer)
