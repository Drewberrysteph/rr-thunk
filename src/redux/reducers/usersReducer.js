import {
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from "../actions/usersActions"

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        data: action.users?.data.results,
        loading: false,
        error: null,
      }
    case LOAD_USERS_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.err,
      }
  }
  return state
}

export default usersReducer
