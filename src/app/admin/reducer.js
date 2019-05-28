import * as request from 'api/request_api'

const FETCH_LIST_CATEGORY = 'admin/FETCH_LIST_CATEGORY'
const FETCH_DETAIL_CATEGORY = 'admin/FETCH_DETAIL_CATEGORY'
const CREATE_CATEGORY = 'admin/CREATE_CATEGORY'
const DELETE_CATEGORY = 'admin/DELETE_CATEGORY'

const FETCH_LIST_DOC = 'admin/FETCH_LIST_DOC'
const UPDATE_STATUS_DOC = 'admin/UPDATE_STATUS_DOC'

const FETCH_LIST_MEMBER = 'admin/FETCH_LIST_MEMBER'
const CREATE_MEMBER = 'admin/CREATE_MEMBER'
const UPDATE_STATUS_MEMBER = 'admin/UPDATE_STATUS_MEMBER'

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
export const updateStatusDoc = (params = {}, cb = null) => {
  return (dispatch) => {
    return request.adminUpdateStatusDocument(params)
      .then(response => {
        dispatch(fetchDocument())
        return cb && cb(response.data)
      })
  }
}

export const fetchListCategory = (params = {}) => {
  return (dispatch) => {
    return request.getListCategory(params)
      .then(response => {
        dispatch({
          type: FETCH_LIST_CATEGORY,
          payload: { categories: response.data }
        })
      })
  }
}

export const createCategory = (params = {}, cb = null) => {
  return (dispatch, getState) => {
    return request.createCategory(params)
      .then(response => {
        const currentList = getState().admin.categories
        const newList = [...[response.data], ...currentList]
        dispatch({
          type: CREATE_CATEGORY,
          payload: { categories: newList }
        })
        return cb && cb(response.data)
      })
  }
}

export const deleteCategory = (params = {}, cb = null) => {
  return (dispatch, getState) => {
    return request.deleteCategoryById(params)
      .then(response => {
        const currentList = getState().admin.categories
        const newList = currentList.filter((row) => row.id !== parseInt(response.data), 10)
        dispatch({
          type: DELETE_CATEGORY,
          payload: { categories: newList }
        })
        return cb && cb(response.data)
      })
  }
}

export const updateCategory = (params = {}, cb = null) => {
  return (dispatch, getState) => {
    return request.updateCategory(params)
      .then(response => {
        const currentList = getState().admin.categories
        const index = currentList.findIndex((row) => row.id === response.data.id)
        currentList[index] = response.data
        dispatch({
          type: DELETE_CATEGORY,
          payload: { categories: currentList }
        })
        return cb && cb(response.data)
      })
  }
}

export const fetchListMember = (params = {}) => {
  return (dispatch) => {
    return request.getListMember({ role: 'member' })
      .then(response => {
        dispatch({
          type: FETCH_LIST_MEMBER,
          payload: { members: response.data }
        })
      })
  }
}

export const createMember = (params = {}, cb) => {
  return (dispatch, getState) => {
    return request.createMember(params)
      .then(response => {
        const currentList = getState().admin.members
        const newList = [...[response.data], ...currentList]
        dispatch({
          type: CREATE_MEMBER,
          payload: { members: newList }
        })
        return cb && cb(response.data)
      })
  }
}

export const updateStatusMember = (params = {}, cb = null) => {
  return (dispatch) => {
    return request.updateStatusMember(params)
      .then(response => {
        dispatch(fetchListMember())
        return cb && cb(response.data)
      })
  }
}

const initState = {
  documents: [],
  categories: [],
  members: []
}

export const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_LIST_CATEGORY:
    case FETCH_DETAIL_CATEGORY:
    case CREATE_CATEGORY:
    case DELETE_CATEGORY:
    case FETCH_LIST_DOC:
    case UPDATE_STATUS_DOC:
    case FETCH_LIST_MEMBER:
    case CREATE_MEMBER:
    case UPDATE_STATUS_MEMBER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
