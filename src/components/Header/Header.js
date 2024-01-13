import "./Header.css";
import menuIcon from "../../assets/images/icon_menu_white.png";
import logoWeb from "../../assets/images/logo_web.png";
import searchIcon from "../../assets/images/icon_search_white.png";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import styled from "styled-components";
import {weatherActions} from "../../store/weatherSlice"


import { useEffect } from "react";


let initial = true;
export default function HeaderComponent() {
  const dispatch = useDispatch();

  const [localTime] = useSelector((state) => [
    state.weather.weather.location.localtime,
  ]);

  const [searchText] = useSelector((state)=>[state.ui.searchText])
  const [searchItems] = useSelector((state) => [state.ui.autocomplete]);

  function changeTab(index) {
    console.log(localTime);
    dispatch(uiActions.switchTab(index));
  }

   useEffect(() => {
     if (initial) {
       try {
         fetchWeather("udupi");
       } catch (error) {
         console.log(error);
       }
     }
     initial = false;
   });

   function handleSearchClick(text){
    dispatch(uiActions.setSearchText(text))
    dispatch(uiActions.updateAutocomplete([]))
    fetchWeather(text)
   }

   async function fetchWeather(text) {
     const response = await fetch(
       "http://api.weatherapi.com/v1/current.json?key=ccec4479ced04aeca23153343230405&q="+text+"&aqi=no"
     );
     const responseData = await response.json();
     console.log(responseData.location.localtime);
   
     dispatch(weatherActions.changeWeatherData(responseData));
   }

  function handleSearchText(text){
    dispatch(uiActions.setSearchText(text.target.value));
    if(text.target.value!=="")
    fetchSearchData(text.target.value);

    
  }

  async function fetchSearchData(text){
    const response = await fetch(
      "http://api.weatherapi.com/v1/search.json?key=ccec4479ced04aeca23153343230405&q="+text
    );
    const responseData = await response.json()
    console.log(responseData);
    dispatch(uiActions.updateAutocomplete(responseData))
  }
  console.log(searchItems);

  return (
    <div class="header">
      <div class="appbar">
        <img id="burger-menu-icon-mobile" src={menuIcon} alt="burger" />
        <img src={logoWeb} alt="logo" />
        <div class="search-container">
          <input value={searchText} type="text" onChange={(evt) => handleSearchText(evt)} />
          <img src={searchIcon} alt="search" />
        </div>
        <img id="search-button-mobile" src={searchIcon} alt="search" />
      </div>
      {searchItems.length===0 ?
     <></>: <SearchSuggestion>{
     searchItems.map((item)=>
      <SearchItem onClick={()=>handleSearchClick(item.name)} key={item.name}>{item.name+" "+item.region}</SearchItem>
     )
     }</SearchSuggestion>
}
      <div class="title-date-mobile"></div>

      <div class="navbar">
        <button class="navbar-button" onClick={() => changeTab(0)}>
          HOME
        </button>
        <button class="navbar-button" onClick={() => changeTab(1)}>
          FAVOURITE
        </button>
        <button class="navbar-button" onClick={() => changeTab(2)}>
          RECENT SEARCH
        </button>

        <div class="title-bar-date">{localTime}</div>
      </div>

      <hr class="divider" />
    </div>
  );
}


const SearchSuggestion = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255,1);
  color: black;
  right: 80px;
  top: 100px;
  width: 455px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const SearchItem = styled.div`
margin-bottom: 5px;
cursor: pointer;
`;