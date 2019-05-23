import { combineReducers } from 'redux'

import { docReducer } from 'app/document/reducer'
import { appReducer } from 'app/appReducer'
import { memReducer } from 'app/member/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  doc: docReducer,
  mem: memReducer
})

export default rootReducer
