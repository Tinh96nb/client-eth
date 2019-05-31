import * as request from 'api/request_api'

const SUMARY = 'home/SUMARY'

export const getSumary = () => {
  return (dispatch) => {
    return request.getSumary()
      .then(response => {
        dispatch({
          type: SUMARY,
          payload: { sumary: response.data }
        })
      })
  }
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
