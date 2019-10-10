import React, { Component } from 'react'


export default class Game extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick} value="Attack">Attack</button>
                <button onClick={this.props.onClick} value="Defense">Defense</button>
                <button onClick={this.props.onClick} value="Evade">Evade</button>
            </div>
        )
    }
}





