import { put } from 'redux-saga/effects';

import { FirestoreTypes } from '../types';

import FirestoreService from '../services/FirestoreService';

export function * getCollection (action) {
  const collection = action.collection || null
  try {
    const collectionSnapshot = yield FirestoreService.getCollection(collection)

    if (collectionSnapshot) {
      yield put({ type: FirestoreTypes.GET_COLLECTION_SUCCESS, collectionSnapshot });
    } else {
      yield put({ type: FirestoreTypes.GET_COLLECTION_ERROR });
    }
  } catch (error) {
    yield put({ type: FirestoreTypes.GET_COLLECTION_ERROR });
  }
}
