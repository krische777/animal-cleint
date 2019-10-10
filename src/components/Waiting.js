import React, { Component } from 'react'
import { connect } from 'react-redux'

class Waiting extends Component {
    render() {
        return (
            <div>
           <h1>Waiting for opponent</h1> 
            <h2>Get ready for some action</h2>
            </div>
        )
    }
}

export default connect  (Waiting)