import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
  },
});

export default store;
