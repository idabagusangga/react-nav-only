import { createStore, combineReducers, applyMiddleware } from 'redux'
import { meteorReducer } from './reducers/meteor'
import { imageReducer } from './reducers/image'
import thunk from 'redux-thunk'

const nasa = combineReducers({
  meteorReducer,
  imageReducer
})

let store = createStore(nasa, /* preloadedState, */window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))

export default store;