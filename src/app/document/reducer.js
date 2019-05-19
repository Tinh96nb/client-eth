
const FETCH_LIST_DOC = 'doc/FETCH_LIST_DOC'

export const fetchDocuments = (params = {}) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_LIST_DOC
      // payload: parsenData
    })
  }
}

const initState = {
  list: [],
  one: {}
}

export const docReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
