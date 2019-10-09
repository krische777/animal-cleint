import React, { Component } from 'react'
import Rooms from './Rooms'
import { connect } from 'react-redux'
import {addRoom} from '../action'
import {getRooms} from '../action'

class RoomsContainer extends Component {
  state={roomName:''}

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

  componentDidMount() {
    this.props.getRooms();
  }

  render() {
    console.log('roomstate in render method', this.props.roomState)

    return (

      <div>
        <Rooms 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state} 
        roomState={this.props.roomState}/>    
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  console.log('mapstate to props state', state)

  return {
     roomState: state.roomReducer

  }

}

export default connect(mapStateToProps, {addRoom, getRooms})(RoomsContainer)
