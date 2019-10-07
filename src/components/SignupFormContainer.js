import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addUser} from '../action'
import SignupForm from './SignupForm'

class SignupFormContainer extends Component {
  state = {
    firstName:'', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state.firstName, this.state.email, this.state.password)
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
const mapStateToProps = (state) => {
  return {
    user: state.reducer
  }
}

export default connect(mapStateToProps, {addUser})(SignupFormContainer)
