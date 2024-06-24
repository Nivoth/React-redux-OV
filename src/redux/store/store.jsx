//old version of redux-react

import { applyMiddleware, compose, legacy_createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";
import { thunk } from "redux-thunk";
// const middleware = [thunk];
export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
