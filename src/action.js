import request from 'superagent'
export const LOG_IN = 'LOG_IN'
export const ADD_USER = 'ADD_USER'
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

export const addUser = (firstName, email, password) => (dispatch) =>{
  request
    .post(`${url}/signup`)
    .send({firstName, email, password })
    .then(res => {
      const action = signUp(res.body)
      dispatch(action)
    })
    .catch(console.error)
}