import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import signupReducer from './signupReducer'
import roomReducer from './roomReducer'

export default combineReducers({
  loginReducer,
  signupReducer,
  roomReducer
})