import { useDispatch, useSelector } from "react-redux";
import "./Weather.css";
import heartIcon from "../../assets/images/icon_favourite_Active.png";
import humidityIcon from "../../assets/images/icon_humidity_info.png";
import precipitaionIcon from "../../assets/images/icon_precipitation_info.png";
import temperatureIcon from "../../assets/images/icon_temperature_info.png";
import visibilityIcon from "../../assets/images/icon_visibility_info.png";
import windIcon from "../../assets/images/icon_wind_info.png";
import styled from "styled-components";
import { uiActions } from "../../store/uiSlice";

export default function WeatherComponent() {
  const dispatch = useDispatch();
  const [weather] = useSelector((state) => [state.weather.weather]);
  const [celcius] = useSelector((state) => [state.ui.celsius]);

  function switchCelcius(value) {
    dispatch(uiActions.switchCelsius(value));
  }

  return (
    <div class="body">
      <div class="top-container">
        <p>
          {weather.location.name}, {weather.location.region}
        </p>
        <div class="top-container-fav-item">
          <FavButton img={heartIcon}></FavButton>
          <div id="fav-text">Added to favourite</div>
          <div id="fav-text">Add to favourite</div>
        </div>
      </div>
      <div class="main-container">
        <img id="sun-image" src={weather.current.condition.icon} alt="" />
        <div id="temperature-container">
          <div id="temperature-label">
            {celcius ? weather.current.temp_c : weather.current.temp_f}{" "}
            <sup>0</sup> {celcius ? "C" : "F"}
          </div>
          <div id="temperature-button">
            <button
              class="temperature-button-item temperature-button-item-extra"
              onClick={() => switchCelcius(true)}>
              <sup>0</sup>C
            </button>
            <button
              class="temperature-button-item"
              onClick={() => switchCelcius(false)}>
              <sup>0</sup>F
            </button>
          </div>
        </div>
        <div id="weather-label">{weather.current.condition.text}</div>
      </div>

      <hr class="divider1" />
      <div class="bottom-sheet">
        <div class="bottom-bar-item">
          <img src={temperatureIcon} alt="temper" height="32px" width="16px" />
          <div class="bottom-bar-sub-item">
            <div id="row-item1">Min - Max</div>
            <div id="row-item2">
              {weather.current.temp_c - 10}
              <sup>0</sup> - {weather.current.temp_c + 10}
              <sup>0</sup>
            </div>
          </div>
        </div>
        <div class="bottom-bar-item">
          <img src={precipitaionIcon} alt="temper" height="30px" width="29px" />
          <div class="bottom-bar-sub-item">
            <div id="row-item1">Precipitation</div>
            <div id="row-item2">{weather.current.temp_c - 10}</div>
          </div>
        </div>
        <div class="bottom-bar-item">
          <img src={humidityIcon} alt="temper" height="25px" width="19px" />
          <div class="bottom-bar-sub-item">
            <div id="row-item1">Humidity</div>
            <div id="row-item2">{weather.current.humidity} %</div>
          </div>
        </div>
        <div class="bottom-bar-item">
          <img src={windIcon} alt="temper" height="22px" width="32px" />
          <div class="bottom-bar-sub-item">
            <div id="row-item1">Wind</div>
            <div id="row-item2">{weather.current.wind_mph} mph</div>
          </div>
        </div>
        <div class="bottom-bar-item">
          <img src={visibilityIcon} alt="temper" height="20px" width="34px" />
          <div class="bottom-bar-sub-item">
            <div id="row-item1">Visibility</div>
            <div id="row-item2">{weather.current.vis_miles} mph</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FavButton = styled.button`
  height: 16.97px;
  width: 18px;
  background-color: transparent;
  border: 0px solid black;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
