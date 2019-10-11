import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import signupReducer from './signupReducer'
import roomReducer from './roomReducer'
import gameReducer from "./gameReducer";

export default combineReducers({
  loginReducer,
  signupReducer,
  roomReducer,
  gameReducer
})