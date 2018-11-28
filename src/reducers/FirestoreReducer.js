import Immutable from 'seamless-immutable';
import { FirestoreTypes } from '../types';

const initialState = Immutable({
  loading: false,
  payload: null,
  success: false,
  error: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FirestoreTypes.GET_COLLECTION:
      return state.merge({
        loading: true,
        success: false,
        error: false,
      });

    case FirestoreTypes.GET_COLLECTION_SUCCESS:
      return state.merge({
        loading: false,
        payload: action.collectionSnapshot,
        success: true,
        error: false,
      });

    case FirestoreTypes.GET_COLLECTION_ERROR:
      return state.merge({
        loading: false,
        payload: null,
        success: false,
        error: true,
      });


    default:
      return state;
  }
};
