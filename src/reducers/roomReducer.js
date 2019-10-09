import {ADD_ROOM} from "../action"
import {GET_ROOMS} from "../action"

export default function (state = [], action = {}) {
  switch (action.type) {
    case ADD_ROOM:
      console.log('room added')
      return [...state, action.payload]
    case GET_ROOMS:
      console.log('room get request')
      return [...state, action.payload]
    default:
      return state
  }
}