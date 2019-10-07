import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'

class LoginFormContainer extends Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.setState({
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
export default connect(mapStateToProps)(LoginFormContainer)
