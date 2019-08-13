import { createStore } from "redux";
import reducer from "./reducer.js";
import testData from "../assets/characterData.js";

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
