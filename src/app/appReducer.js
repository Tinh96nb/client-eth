import * as request from 'api/request_api'

const FETCH_USER_ME = 'user/FETCH_USER_ME'
const FETCH_CATEGORY = 'user/FETCH_CATEGORY'

const initialState = {
  authChecked: false,
  me: null,
  categories: []
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

export function getListCategory () {
  return (dispatch) => request.getListCategory()
    .then((response) => {
      dispatch({
        type: FETCH_CATEGORY,
        payload: { categories: response.data }
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
    case FETCH_CATEGORY:
      return { ...state, ...payload }
    default:
      return state
  }
}
