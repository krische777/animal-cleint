import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addUser} from '../action'
import SignupForm from './SignupForm'
import { Redirect } from 'react-router-dom'


class SignupFormContainer extends Component {
  state = {
    firstName:'', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state.firstName, this.state.email, this.state.password) // takes a while
    //if(this.props.status===200){
      // this.props.history.push('/login') // sync 
    //}
    this.setState({firstName:'', email: '', password: '' })
    console.log('this props user ', this.props.user)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if(this.props.user.email){
      return <Redirect to="/login"/>
    }

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
    user: state.signupReducer
  }
}

export default connect(mapStateToProps, {addUser})(SignupFormContainer)
