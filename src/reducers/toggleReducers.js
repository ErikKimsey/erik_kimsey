export default (state = {}, action) => {
  switch (action.type) {
    case 'NAV_TOGGLE':
      return {
        result: action.payload
      }
    default:
      return state
  }
}