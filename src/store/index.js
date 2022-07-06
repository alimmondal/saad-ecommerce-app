import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
