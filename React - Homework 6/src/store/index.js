import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer.js";

const store = createStore(todoReducer);

export default store;
