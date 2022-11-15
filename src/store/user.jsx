import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initalUserState = {
  user: {},
  loading: false,
  token,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    initUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    userDestroy(state) {
      state = initalUserState;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
