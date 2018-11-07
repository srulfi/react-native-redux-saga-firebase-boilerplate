import { put } from 'redux-saga/effects';

import { DatabaseTypes } from '../types';

import FirebaseService from '../services/FirebaseService';

export function* getDatabase() {
  try {
    const database = yield FirebaseService.getDatabase()

    if (database) {
      yield put({ type: DatabaseTypes.GET_DATABASE_SUCCESS, database });
    } else {
      yield put({ type: DatabaseTypes.GET_DATABASE_ERROR });
    }
  } catch (error) {
    yield put({ type: DatabaseTypes.GET_DATABASE_ERROR });
  }
}
