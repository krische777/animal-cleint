import React, { Component } from 'react'

export default class Rooms extends Component {
  render() {
    console.log('available rooms',JSON.stringify(this.props.roomState))
    return (
      <div>
        <h3>Available rooms: You can join by clicking on the room name</h3>
        <ul>{this.props.roomState.map(room=> {
          return <li key={room.id}>{room.name}</li>
        })}</ul>
        <h3>Create a new room</h3>

        <form onSubmit={this.props.onSubmit}>
          
        <input type="text" placeholder="Add a room name here..."
        name='roomName' 
        value={this.props.values.roomName} 
        onChange={this.props.onChange}/>


        <button type='submit'>Make a room</button>
        </form>

       </div>
    )
  }
}