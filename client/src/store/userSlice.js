import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

//For store
export default userSlice.reducer;

//for components
export const { getUser } = userSlice.actions;
