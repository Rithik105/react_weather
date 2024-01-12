import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import weatherReducer from "./weatherSlice";

const toolStore = configureStore({
  reducer: { ui: uiReducer, weather: weatherReducer },
});

export default toolStore;
