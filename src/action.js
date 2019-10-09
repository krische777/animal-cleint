import request from 'superagent'
export const LOG_IN = 'LOG_IN'
export const ADD_USER = 'ADD_USER'
export const ADD_ROOM = 'ADD_ROOM'
export const GET_ROOMS = 'GET_ROOMS'
const url = 'http://localhost:8888'

function login(payload) {
  return {
    type: LOG_IN,
    payload: payload
  }
}

export const userLogin = (email, password) => (dispatch) => {
  request
    .post(`${url}/login`)
    .send({ email, password })
    .then(res => {
      console.log('log res:', res.body)
      const action = login(res.body)
      dispatch(action)
    })
    .catch(error => {
      // console.error;
      console.log('error:', error.response.body) 
    })
}

function signUp(payload) {
  return {
    type: ADD_USER,
    payload: payload
  }
}

export const addUser = (firstName, email, password) => (dispatch) => {
  request
    .post(`${url}/signup`)
    .send({ firstName, email, password })
    .then(res => {
      // const status = res.status
      // dispatch(status)
      const action=signUp(res.body)
      dispatch(action)
      console.log('success')
    }).catch(error=>{
      console.log(error)
    })
}

function room(payload) {
  return {
    type: ADD_ROOM,
    payload: payload
  }
}

export const addRoom = (roomName) => (dispatch, getState) => {
  const state=getState()
  const {jwt}=state.loginReducer
  console.log('addRoom state', state.loginReducer.jwt)

  request
    .post(`${url}/room`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ name: roomName})
    .then(res => {
      //const action = room(res.body)
      console.log(res.body)
      //dispatch(action)
    })
    .catch(console.error)
}

export const UPDATE_ROOMS = 'UPDATE_ROOMS'
export const updateRooms = (payload) => ({
    type: UPDATE_ROOMS,
    payload
})


function getRoomsAction(payload) {
  return {
    type: GET_ROOMS,
    payload: payload
  }
}

export const getRooms = () => (dispatch, getState) => {
  const state=getState()
  const {jwt}=state.loginReducer
  console.log('getRooms state', state.loginReducer.jwt)

  request
    .get(`${url}/room`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(res => {
      const action = getRoomsAction(res.body)
      //console.log(res.body)
      dispatch(action)
    })
    .catch(console.error)
}