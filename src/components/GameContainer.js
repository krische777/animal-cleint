import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import { userAttack } from "../action";
import { userDefense } from "../action";
import { userEvade } from "../action";

class GameContainer extends Component {
  state = { HP: "", SP: "" };
  onClick = event => {
   
    switch (event.target.value) {
      case "Attack":
        return this.props.userAttack(this.state.HP, this.state.SP);
      case "Defense":
        return this.props.userDefense(this.state.HP, this.state.SP);
      case "Evade":
        return this.props.userEvade(this.state.HP, this.state.SP);
      default:
        return;
    }
  };
 roomName=(event)=>{
console.log(event.target)
  }

  render() {
      
    return (
      <div>
        <h3>{`Your name: ${this.props.userName}`}</h3>
        <Game onClick={this.onClick} values={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('AAA',state.roomReducer)
  return {
    userName: state.loginReducer.userName,
    status: state.roomReducer
  };
};

export default connect(
  mapStateToProps,
  { userAttack, userDefense, userEvade }
)(GameContainer);
