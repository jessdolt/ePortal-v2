import { createSlice } from "@reduxjs/toolkit";

const initalUserState = {
  user: {},
  loading: false,
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    initUser(state, action) {
      console.log(action);
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
