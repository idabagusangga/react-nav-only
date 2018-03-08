export function GET_METEORS (param) {
  return {
    type: 'GET_METEORS',
    payload: param
  }
}

export function DELETE_METEOR (param) {
  return {
    type: 'DELETE_METEOR',
    payload: param
  }
}