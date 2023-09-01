import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./_reducer"; // You need to create this file

const store = configureStore({
  reducer: rootReducer,
});

export default store;
