import { combineReducers } from "redux"
import authReducer from "./authReducer"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
  isLogged: authReducer,
  users: usersReducer,
})

export default rootReducer
