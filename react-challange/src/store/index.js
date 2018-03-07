import { createStore } from 'redux'

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

let store = createStore(meteorReducer)

export default store;