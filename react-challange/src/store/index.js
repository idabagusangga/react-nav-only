import { createStore, combineReducers } from 'redux'

function meteorReducer (state = [], action) {
  switch (action.type) {
    case 'GET_METEORS':
    console.log('masuk sini', action);
        return state = action.payload
      break;
    default:
        return state  
  }
}

function imageReducer (state = {data:{}}, action) {
  switch (action.type) {
    case 'GET_IMAGE':
      console.log('masuk image reducer', action);
      return state = action.payload
      break;
    default:
      return state
  }
}
const nasa = combineReducers({
  meteorReducer,
  imageReducer
})

let store = createStore(nasa)

export default store;