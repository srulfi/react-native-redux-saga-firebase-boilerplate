import { combineReducers } from 'redux'

import NavigationReducer from './NavigationReducer'
import AuthReducer from './AuthReducer'
import DatabaseReducer from './DatabaseReducer'
import FirestoreReducer from './FirestoreReducer'

export default combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer,
  database: DatabaseReducer,
  firestore: FirestoreReducer,
})
