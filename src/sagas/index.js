import { all, takeLatest } from 'redux-saga/effects'

// types
import {
  AuthTypes,
  DatabaseTypes,
  FirestoreTypes,
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

import {
  getCollection,
} from './FirestoreSagas'

// connect types to sagas
export default function * root () {
  yield all([
    takeLatest(FirestoreTypes.GET_COLLECTION, getCollection),
    takeLatest(DatabaseTypes.GET_DATABASE, getDatabase),
    takeLatest(AuthTypes.SYNC_USER, syncUser),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT, logout),
  ])
}
