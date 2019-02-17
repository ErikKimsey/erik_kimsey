const navToggle = () => dispatch => {
  dispatch({
    type: 'NAV_TOGGLE',
    payload: 'result_of_simple_action'
  })
}

export default navToggle;