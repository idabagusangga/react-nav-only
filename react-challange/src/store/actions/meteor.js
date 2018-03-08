import axios from 'axios'



export function GET_METEORS () {
  return dispatch => {
    dispatch(PENDING_METEORS())
      axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=F7OQVxHJR0EakMqdQxQuaM0MRQmIJjSXy7CL8Kug')
        .then(response => {
          dispatch(SUCCESS_METEOR(response.data.near_earth_objects['2015-09-08']))
        })
        .catch(err => {
          dispatch(FAILED_METEORS(err))
        })
  }  
}

export function DELETE_METEOR (param) {
  return {
    type: 'DELETE_METEOR',
    payload: param
  }
}

export function PENDING_METEORS () {
  return {
    type: 'PENDING_METEORS'
  }
}

export function FAILED_METEORS (err) {
  return {
    type: 'FAILED_METEORS',
    payload: err
  }
}

export function SUCCESS_METEOR (param) {
  return {
    type: 'SUCCESS_METEOR',
    payload: param
  }
}