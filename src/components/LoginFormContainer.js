import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import {userLogin} from '../action'

class LoginFormContainer extends Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.userLogin(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: '',
    })
    this.props.history.push('/lobby')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <LoginForm
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
export default connect(mapStateToProps, {userLogin})(LoginFormContainer)
