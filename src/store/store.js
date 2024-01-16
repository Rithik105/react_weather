import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import weatherReducer from "./weatherSlice";
import favouriteReducer from "./favouriteSlice";
import recentReducer from "./recentSlice";

const toolStore = configureStore({
  reducer: {
    ui: uiReducer,
    weather: weatherReducer,
    favourite: favouriteReducer,
    recent: recentReducer,
  },
});

export default toolStore;
