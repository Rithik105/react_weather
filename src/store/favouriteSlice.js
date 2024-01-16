import { createSlice } from "@reduxjs/toolkit";

const favouriteInitialState = {
  favourite: [],
  favState: false,
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: favouriteInitialState,
  reducers: {
    addToFav(state, action) {
      const index = state.favourite.findIndex(
        (obj) => obj.location.name === action.payload.location.name
      );
      console.log(index);
      if (index !== -1) {
      } else {
        state.favourite.push(action.payload);
        // console.log(action.payload.location.name);
      }
    },
    removeFromFav(state, action) {
      state.favourite = state.favourite.filter(
        (item) => item.location.name !== action.payload.location.name
      );
    },
    checkFav(state, action) {
      const index = state.favourite.findIndex(
        (obj) => obj.location.name === action.payload.location.name
      );
      console.log(index);
      if (index !== -1) {
        state.favState = true;
      } else {
        state.favState = false;
      }
    },
  },
});
export const favActions = favouriteSlice.actions;

export default favouriteSlice.reducer;
