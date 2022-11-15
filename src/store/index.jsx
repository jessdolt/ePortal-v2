import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import uiReducer from "./ui";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
});

export default store;
