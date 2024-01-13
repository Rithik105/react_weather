import { createSlice } from "@reduxjs/toolkit";

const weatherInitalState = {
  weather: {
    location: {
      localtime: "",
      name: "",
      region: "",
    },
    current: {
      condition: {
        text: "",
        icon: "",
      },
      temp_c: 0,
      temp_f: 0,
      precip_mm: 0,
      humidity: 0,
      wind_mph: 0,
      vis_miles: 0,
    },
  },
};
const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherInitalState,
  reducers: {
    changeWeatherData(state, action) {
      console.log(action.payload.location.localtime);
      state.weather = {
        location: {
          localtime: action.payload.location.localtime,
          name: action.payload.location.name,
          region: action.payload.location.region,
        },
        current: {
          condition: {
            text: action.payload.current.condition.text,
            icon: action.payload.current.condition.icon,
          },
          temp_c: action.payload.current.temp_c,
          temp_f: action.payload.current.temp_f,
          precip_mm: action.payload.current.precip_mm,
          humidity: action.payload.current.humidity,
          wind_mph: action.payload.current.wind_mph,
          vis_miles: action.payload.current.vis_miles,
        },
      };
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
