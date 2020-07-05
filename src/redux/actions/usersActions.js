import axios from "axios"

export const LOAD_USERS_LOADING = "LOAD_USERS_LOADING"
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS"
export const LOAD_USERS_ERROR = "LOAD_USERS_ERROR"

export const loadUsers = () => dispatch => {
  dispatch({ type: LOAD_USERS_LOADING })
  axios
    .get("https://swapi.dev/api/people")
    .then(res => dispatch({ type: LOAD_USERS_SUCCESS, users: res }))
    .catch(err => dispatch({ type: LOAD_USERS_ERROR, err: err.message }))
}
