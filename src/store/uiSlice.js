import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  tab: 0,
  celsius: true,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    switchTab(state, action) {
      state.tab = action.payload;
    },
    switchCelsius(state, action) {
      state.celsius = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
