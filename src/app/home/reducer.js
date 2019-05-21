import * as request from 'api/request_api'

const FETCH_LIST_DOC = 'doc/FETCH_LIST_DOC'
const FETCH_DETAIL_DOC = 'doc/FETCH_DETAIL_DOC'

export const fetchDocument = (params = {}) => {
  return (dispatch) => {
    return request.getListDocument(params)
      .then(response => {
        dispatch({
          type: FETCH_LIST_DOC,
          payload: { list: response.data }
        })
      })
  }
}

export const fetchDocumentById = (params = {}) => {
  return (dispatch) => {
    return request.getDocumentById(params)
      .then(response => {
        dispatch({
          type: FETCH_DETAIL_DOC,
          payload: { one: response.data }
        })
      })
  }
}

const initState = {
  list: [],
  one: {}
}

export const docReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_LIST_DOC:
    case FETCH_DETAIL_DOC:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
