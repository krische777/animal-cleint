import {ADD_ROOM, GET_ROOMS, UPDATE_ROOMS} from "../action"

export default function (state = [], action = {}) {
  switch (action.type) {
    case ADD_ROOM:
      console.log('room added', action.payload)
      return action.payload
    case UPDATE_ROOMS:
      console.log('Action payload:', action.payload)
      return action.payload
    case GET_ROOMS:
      console.log('room get request')
      return action.payload
    default:
      return state
  }
}