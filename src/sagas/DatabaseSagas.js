import { put } from 'redux-saga/effects';

import { DatabaseTypes } from '../types';

import DatabaseService from '../services/DatabaseService';

export function * getDatabase (action) {
  try {
    const database = yield DatabaseService.getDatabase()

    if (database) {
      yield put({ type: DatabaseTypes.GET_DATABASE_SUCCESS, database });
    } else {
      yield put({ type: DatabaseTypes.GET_DATABASE_ERROR });
    }
  } catch (error) {
    yield put({ type: DatabaseTypes.GET_DATABASE_ERROR });
  }
}
