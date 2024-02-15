import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";
import localStorageMiddleware from "../middlewares/localStorageMiddleware";

const composeDevExtension =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeDevExtension(applyMiddleware(thunk, localStorageMiddleware))
);

export default store;
