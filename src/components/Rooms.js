import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Rooms extends Component {



  render() {
    // console.log('available rooms',JSON.stringify(this.props.roomState))
    return (
      
      <div>
        <h3>Available rooms: You can join by clicking on the room name</h3>
        
        <ul style={{listStyleType:"none"}}>{this.props.roomState.map(room=> {
          //take the userid and roomid from onclick on the button
      return <li key={room.id} ><button onClick={this.props.onClick} >{(room.status==="FULL")?`${room.name}`:<Link to="/game">{room.name}</Link>}</button>- {room.status}</li>
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