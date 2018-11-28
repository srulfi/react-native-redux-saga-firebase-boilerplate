import { FirestoreTypes } from '../types'

export const getCollection = (collection) => ({ type: FirestoreTypes.GET_COLLECTION, collection })