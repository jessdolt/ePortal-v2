import { createSlice } from "@reduxjs/toolkit";

const initalUserState = {
  user: {},
  loading: false,
  token: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    initUser(state, action) {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    userDestroy(state) {
      state = initalUserState;
      console.log(state);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
