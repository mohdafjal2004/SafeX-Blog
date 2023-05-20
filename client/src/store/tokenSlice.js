import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: { token: null },
  reducers: {
    getToken: (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
    },
  },
});

//For store
export default tokenSlice.reducer;

//for components
export const { getToken } = tokenSlice.actions;
