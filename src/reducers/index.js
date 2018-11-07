import { combineReducers } from 'redux'

import NavigationReducer from './NavigationReducer'
import AuthReducer from './AuthReducer'
import DatabaseReducer from './DatabaseReducer'

export default combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer,
  database: DatabaseReducer,
})
