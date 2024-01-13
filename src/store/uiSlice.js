import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  tab: 0,
  celsius: true,searchText:"",autocomplete:[],
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
    setSearchText(state,action){
      state.searchText=action.payload;
    },
    updateAutocomplete(state,action){
      state.autocomplete=action.payload;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
