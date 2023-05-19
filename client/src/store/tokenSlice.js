import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: [],
  reducers: {
    getToken: (state, action) => {
      state.push(action.payload);
    },
  },
});

//For store
export default tokenSlice.reducer;

//for components
export const { getToken } = tokenSlice.actions;
