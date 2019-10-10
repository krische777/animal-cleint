import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import { userAttack } from "../action";
import { userDefense } from "../action";
import { userEvade } from "../action";

class GameContainer extends Component {
  state = { HP: "", SP: "" };
  onClick = event => {
    // event.preventDefault();
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

  render() {
    return (
      <div>
        <Game onClick={this.onClick} values={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.reducer
  };
};

export default connect(
  mapStateToProps,
  { userAttack, userDefense, userEvade }
)(GameContainer);
