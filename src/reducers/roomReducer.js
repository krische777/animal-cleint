import {ADD_ROOM, GET_ROOMS, UPDATE_ROOMS,JOIN_ROOM} from "../action"

export default function (state = [], action = {}) {
  switch (action.type) {
    case ADD_ROOM:
      return action.payload
    case UPDATE_ROOMS:
      return action.payload
    case GET_ROOMS:
      return action.payload
    case JOIN_ROOM:
      return action.payload
    default:
      return state
  }
}