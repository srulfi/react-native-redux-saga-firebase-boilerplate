import { all, takeLatest } from 'redux-saga/effects'

// types
import {
  AuthTypes,
  DatabaseTypes,
} from '../types'

// sagas
import {
  syncUser,
  login,
  logout,
} from './AuthSagas'

import {
  getDatabase,
} from './DatabaseSagas'

// connect types to sagas
export default function * root () {
  yield all([
    takeLatest(DatabaseTypes.GET_DATABASE, getDatabase),
    takeLatest(AuthTypes.SYNC_USER, syncUser),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT, logout),
  ])
}
