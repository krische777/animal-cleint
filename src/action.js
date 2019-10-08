import request from 'superagent'
export const LOG_IN = 'LOG_IN'
export const ADD_USER = 'ADD_USER'
export const ADD_ROOM = 'ADD_ROOM'
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
      const action = login(res.body)
      dispatch(action)
    })
    .catch(console.error)
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

export const addRoom = (roomName) => (dispatch) => {
  request
    .post(`${url}/room`)
    .send({ name: roomName})
    .then(res => {
      const action = room(res.body)
      //console.log(res.body)
      dispatch(action)
    })
    .catch(console.error)
}