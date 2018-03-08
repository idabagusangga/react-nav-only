import axios from 'axios'

export function GET_IMAGE () {
  return dispatch => {
    dispatch(PENDING_IMAGE())
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=F7OQVxHJR0EakMqdQxQuaM0MRQmIJjSXy7CL8Kug`)
      .then(response => {
        dispatch(SUCCESS_IMAGE({pic: response.data.url, info: response.data.explanation}))
      })
      .catch(err => {
        dispatch(FAILED_IMAGE(err))
      })
  }
}

export function PENDING_IMAGE () {
  return {
    type: 'PENDING_IMAGE'
  }
}

export function SUCCESS_IMAGE (params) {
  return {
    type: 'SUCCESS_IMAGE',
    payload: params
  }
}

export function FAILED_IMAGE (err) {
  return {
    type: 'FAILED_IMAGE',
    payload: err
  }
}