import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1> Let's Fight!</h1>
        <button><Link to="/signup">Create new account</Link></button>
        <button><Link to="/login">login</Link></button>
      </div>
    )
  }
}
