export function imageReducer (state = [], action) {
  switch (action.type) {
    case 'SUCCESS_IMAGE':
      console.log('masuk image reducer', action);
      return action.payload
      break;
    case 'PENDING_IMAGE':
      return 'Pending'
      break;
    case 'FAILED_IMAGE': 
      return 'Failed'
      break;
    default:
      return state
  }
}