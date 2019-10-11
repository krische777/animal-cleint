import React, {Component} from "react";
import {connect} from "react-redux";
import Game from "./Game";

import {fighterAction, getGames, updateGames} from '../action'
import {Redirect} from "react-router";


class GameContainer extends Component {
    state = {HP: "", SP: ""};

    source = new EventSource(`https://young-fjord-22785.herokuapp.com/room`);


    componentDidMount() {
        this.source.onmessage = event => {
          const messages = JSON.parse(event.data);
          const data = messages.data //JSON.parse(messages.data)
          
          

          console.log('Received game data', messages)
            if (messages.type === ("GAME_CREATED")) {
                console.log('data received in game container create', data)
                
                this.props.updateGames(data);
            } else if (messages.type === ("GAME_PLAYER_ATTACKED")) {
                console.log('data received in game container attack', data)
                this.props.updateGames(data);
            }
        };

    }

    // const gameId= this.props.gameState.map(game => {
    //     return console.log("Game id i give in the onclick event NEW", game.id), game.id
    // })

    onClick = event => {
        // event.preventDefault();
        //console.log('game id', event.target.value)
        console.log('game id in GAMECONTAINER',this.props.gameState)


        this.props.fighterAction(event.target.value,
            this.props.loginState.user, this.props.gameState.id);
    };

    render() {
        console.log('game id 3', this.props.loginState.user)
        return (
            <div>
                <Game onClick={this.onClick}
                      values={this.state}
                      gameState={this.props.gameState}
                      loginState={this.props.loginState}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("gamestate to take the game id from", state)
    return {
        loginState: state.loginReducer,
        //i take the gamestate to take the game id from it
        gameState: state.gameReducer
       
    };
};

export default connect(mapStateToProps, {fighterAction,getGames, updateGames})(GameContainer);