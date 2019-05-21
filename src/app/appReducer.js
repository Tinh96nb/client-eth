import * as request from 'api/request_api'

const FETCH_USER_ME = 'user/FETCH_USER_ME'

const initialState = {
  authChecked: false,
  me: null
}

export function postLogin (parameters, cb) {
  return request.postLogin(parameters)
    .then((response) => {
      return cb(response.data)
    })
    .catch((err) => {
      console.log('acc not found', err)
    })
}

export function getUserMe () {
  return (dispatch) => request.postUserMe()
    .then((response) => {
      dispatch({
        type: FETCH_USER_ME,
        payload: { me: response.data.profile, authChecked: true }
      })
    })
}

export const appReducer = (
  state = initialState,
  action
) => {
  const { type, payload = {} } = action
  switch (type) {
    case FETCH_USER_ME:
      return { ...state, ...payload }
    default:
      return state
  }
}
