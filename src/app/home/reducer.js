import * as request from 'api/request_api'
import { requestAxios } from 'app/apiReducer'

const SUMARY = 'home/SUMARY'

export const getSumary = () => {
  return (dispatch) => dispatch(requestAxios(request.getSumary()))
    .then(response => {
      dispatch({
        type: SUMARY,
        payload: { sumary: response }
      })
    })
}

const initState = {
  sumary: null
}

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case SUMARY:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
