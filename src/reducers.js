import { combineReducers } from 'redux'

import { docReducer } from 'app/document/reducer'
import { appReducer } from 'app/appReducer'

const rootReducer = combineReducers({
  app: appReducer,
  doc: docReducer
})

export default rootReducer
