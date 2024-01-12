import "./App.css";
import HeaderComponent from "./components/Header/Header";
import styled from "styled-components";
import background from "./assets/images/background.png";
import WeatherComponent from "./components/Weather/Weather";
import { useEffect, useState } from "react";
import FavouriteComponent from "./components/Favourite/Favourite";
import RecentComponent from "./components/Recent/Recent";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "./store/weatherSlice";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const [tab] = useSelector((state) => [state.ui.tab]);

  useEffect(() => {
    if (initial) {
      try {
        fetchWeather();
      } catch (error) {
        console.log(error);
      }
    }
    initial = false;
  });

  async function fetchWeather() {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=ccec4479ced04aeca23153343230405&q=London&aqi=no"
    );
    const responseData = await response.json();
    console.log(responseData.location.localtime);
    dispatch(weatherActions.changeWeatherData(responseData));
  }

  return (
    <MainContainer img={background}>
      <HeaderComponent></HeaderComponent>
      {tab === 0 ? (
        <WeatherComponent></WeatherComponent>
      ) : tab === 1 ? (
        <FavouriteComponent></FavouriteComponent>
      ) : (
        <RecentComponent></RecentComponent>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export default App;
