import { createStore, combineReducers } from 'redux'

function meteorReducer (state = [], action) {
  switch (action.type) {
    case 'GET_METEORS':
    console.log('masuk sini', action);
        return [ ...action.payload ]
      break;
    case 'ADD_METEOR':
    console.log('masuk meteor add', action);
      return [
        ...state,
        action.payload
      ]
    break;
    case 'EDIT_METEOR':
    console.log('masuk edit meteor', action);
      const newState = state.map(meteor => {
        if (meteor.name === action.payload.oldName) {
          meteor.name = action.payload.newName
          return meteor
        } else {
          return meteor
        }
      })
      console.log(newState);
      return newState
      break;
    case 'DELETE_METEOR':
    let newStateForDelete = [...state]
    console.log(action.payload);
      const index = newStateForDelete.findIndex(meteor => {
        return meteor.name === action.payload
      })
    newStateForDelete.splice(index,1)
    console.log(newStateForDelete);
    return newStateForDelete
    break;
    default:
        return state  
  }
}

function imageReducer (state = [], action) {
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

let store = createStore(nasa, /* preloadedState, */window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;