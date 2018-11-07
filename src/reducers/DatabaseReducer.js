import Immutable from 'seamless-immutable';
import { DatabaseTypes } from '../types';

const initialState = Immutable({
  loading: false,
  database: null,
  success: false,
  error: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DatabaseTypes.GET_DATABASE_SUCCESS:
      return state.merge({
        loading: false,
        database: action.database,
        success: true,
        error: false,
      });

    case DatabaseTypes.GET_DATABASE_ERROR:
      return state.merge({
        loading: false,
        database: null,
        success: false,
        error: true,
      });


    default:
      return state;
  }
};
