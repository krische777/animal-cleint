import {ADD_ROOM} from "../action"

export default function (state = [], action = {}) {
  switch (action.type) {
    case ADD_ROOM:
      return [...state, action.payload]
    default:
      return state
  }
}