import { combineReducers } from 'redux'

import { docReducer } from 'app/document/reducer'
import { appReducer } from 'app/appReducer'
import { memReducer } from 'app/member/reducer'
import { profileReducer } from 'app/profile/reducer'
import { adminReducer } from 'app/admin/reducer'
import { homeReducer } from 'app/home/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  doc: docReducer,
  mem: memReducer,
  profile: profileReducer,
  admin: adminReducer
})

export default rootReducer
