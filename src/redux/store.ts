import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type rootState = ReturnType<typeof todoReducer>;

export default store;
