/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  darkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
