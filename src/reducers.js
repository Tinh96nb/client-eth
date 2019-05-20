import { combineReducers } from 'redux'

import { docReducer } from 'app/document/reducer'
const rootReducer = combineReducers({
  doc: docReducer
})

export default rootReducer
