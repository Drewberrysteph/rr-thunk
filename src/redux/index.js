import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"

const index = () => {
  const middleware = [thunk]

  const componseEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    {},
    componseEnchancers(applyMiddleware(...middleware))
  )

  return store
}

export default index
