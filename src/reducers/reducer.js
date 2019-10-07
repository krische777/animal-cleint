import {LOG_IN, ADD_USER} from "../action"
export default function (state = [], action = {}) {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case ADD_USER:
      return action.payload
    default:
      return state
  }
}