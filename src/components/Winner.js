import React, { Component } from 'react'
import { connect } from 'react-redux'

class Winner extends Component {

    render() {
        return (
            <div>
                Congratulations!The winner is: 
            </div>
        )
    }
}

export default connect (Winner)