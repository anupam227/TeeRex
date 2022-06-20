import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducer from "./reducers";

const store = createStore(
  allReducer,
  compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? (a) => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
