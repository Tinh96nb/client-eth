import * as request from 'api/request_api'

const FETCH_LIST_DOC = 'profile/FETCH_LIST_DOC'
const FETCH_DETAIL_DOC = 'profile/FETCH_DETAIL_DOC'
const CREATE_DOC = 'profile/CREATE_DOC'
const DELETE_DOC = 'profile/DELETE_DOC'
const UPDATE_STATUS_DOC = 'profile/UPDATE_STATUS_DOC'

export const fetchDocument = (params = {}) => {
  return (dispatch) => {
    return request.getListDocument(params)
      .then(response => {
        dispatch({
          type: FETCH_LIST_DOC,
          payload: { documents: response.data }
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

export const crateDocument = (params = {}, cb = null) => {
  return (dispatch, getState) => {
    return request.crateDocument(params)
      .then(response => {
        const currentList = getState().profile.documents
        const newList = [...[response.data], ...currentList]
        dispatch({
          type: CREATE_DOC,
          payload: { documents: newList }
        })
        return cb && cb(response.data)
      })
  }
}

export const deleteDocument = (params = {}, cb = null) => {
  return (dispatch, getState) => {
    return request.deleteDocumentById(params)
      .then(response => {
        const currentList = getState().profile.documents
        const newList = currentList.filter((row) => row.id !== response.data)
        dispatch({
          type: DELETE_DOC,
          payload: { documents: newList }
        })
        return cb && cb(response.data)
      })
  }
}

export const updateDocument = (params = {}, cb = null) => {
  return (dispatch, getState) => {
    return request.updateDocument(params)
      .then(response => {
        const currentList = getState().profile.documents
        const index = currentList.findIndex((row) => row.id === response.data.id)
        currentList[index] = response.data
        dispatch({
          type: UPDATE_STATUS_DOC,
          payload: { documents: currentList }
        })
        return cb && cb(response.data)
      })
  }
}
export const updateStatus = (params = {}, cb = null) => {
  return (dispatch, getState) => {
    return request.updateStatusDocument(params)
      .then(response => {
        const currentList = getState().profile.documents
        const index = currentList.findIndex((row) => row.id === response.data.id)
        currentList[index] = response.data
        dispatch({
          type: DELETE_DOC,
          payload: { documents: currentList }
        })
        return cb && cb(response.data)
      })
  }
}

const initState = {
  documents: []
}

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_LIST_DOC:
    case FETCH_DETAIL_DOC:
    case CREATE_DOC:
    case DELETE_DOC:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
