import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import sampleReducer from "./reducers/sample.slice";

const rootReducer = combineReducers({
  sample: sampleReducer, // Import the created slice (reducer) and add here with a proper name
  // here we are assigning the name "sample", we use that name, when we are getting the state of the store
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
