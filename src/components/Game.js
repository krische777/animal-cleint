import React, {Component} from 'react'


export default class Game extends Component {

    render() {
        console.log('vals', this.props)

        return (
            <div>

                <label>
                    First Player Health:<label>{this.props.gameState.healthp1}</label><br/>
                </label>
                <label>
                    Second Player Health:<label>{this.props.gameState.healthp2}</label><br/>
                </label>
                <button onClick={this.props.onClick} value="Attack">Attack</button>
                <button onClick={this.props.onClick} value="Defense">Defense</button>
                <button onClick={this.props.onClick} value="Evade">Evade</button>
                <br/>
                <label>
                    Event Log:<br/><label>You hit enemy for 34 damage</label>
                </label>
            </div>
        )
    }
}





