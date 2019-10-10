import React, { Component } from 'react'
import Rooms from './Rooms'
import { connect } from 'react-redux'
import {addRoom, getRooms, updateRooms, joinRoom} from '../action'
import { Redirect } from 'react-router-dom'

class RoomsContainer extends Component {
  state={roomName:''}
  //should put the real link to heroku to the eventsource
  source = new EventSource(`http://localhost:8888/room`);
  componentDidMount() {
    // console.log("got here?",this.source)
    // this.props.getRooms()
    //console.log("component did mount",this.source)
    this.source.onmessage = event => {
      // console.log('got an event?', event.data)
      const messages = JSON.parse(event.data);
      // console.log("data is:",messages)
      this.props.updateRooms(messages);
    };
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addRoom(this.state.roomName)
    this.setState({
      roomName: '',
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onClick=(event)=>{
    event.preventDefault()
    this.props.joinRoom(event.target.innerHTML, this.props.loginState.user)
  }

  render() {
    //console.log('roomstate in render method', this.props.roomState)

    return ((this.props.loginState.jwt) ?

      <div>
        <Rooms 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onClick={this.onClick}
        values={this.state} 
        roomState={this.props.roomState}/>    
      </div>
      :
      <Redirect to="/login" />
    )
  }
}

const mapStateToProps =(state)=>{
  // console.log('mapstate to props state', state)

  return {
     roomState: state.roomReducer,
     loginState: state.loginReducer

  }

}

export default connect(mapStateToProps, {addRoom, getRooms, updateRooms, joinRoom})(RoomsContainer)
