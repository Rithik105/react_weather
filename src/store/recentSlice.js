import { createSlice } from "@reduxjs/toolkit";

const recentInitialState = {
  recent: [],
};

const recentSlice = createSlice({
  name: "recent",
  initialState: recentInitialState,
  reducers: {
    addToRecent(state, action) {
      const index = state.recent.findIndex(
        (obj) => obj.location.name === action.payload.location.name
      );
      console.log(index);
      if (index !== -1) {
      } else {
        state.recent.push(action.payload);
        // console.log(action.payload.location.name);
      }
    },
  },
});
export const recentActions = recentSlice.actions;

export default recentSlice.reducer;
