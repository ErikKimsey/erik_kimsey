let initialState = [{isActive: false}];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NAV_TOGGLE':
      return Object.assign({}, state, {
        
      })
    default:
      return state
  }
}