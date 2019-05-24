import { combineReducers } from 'redux'

import { docReducer } from 'app/document/reducer'
import { appReducer } from 'app/appReducer'
import { memReducer } from 'app/member/reducer'
import { profileReducer } from 'app/profile/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  doc: docReducer,
  mem: memReducer,
  profile: profileReducer
})

export default rootReducer
