export function meteorReducer (state = [], action) {
  switch (action.type) {
    case 'SUCCESS_METEOR':
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
    case 'PENDING_METEORS':
    return 'PLEASE WAIT'
    case 'FAILED_METEORS':
    return action.payload
    default:
        return state  
  }
}