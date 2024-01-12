import "./Header.css";
import menuIcon from "../../assets/images/icon_menu_white.png";
import logoWeb from "../../assets/images/logo_web.png";
import searchIcon from "../../assets/images/icon_search_white.png";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

export default function HeaderComponent() {
  const dispatch = useDispatch();

  const [localTime] = useSelector((state) => [
    state.weather.weather.location.localtime,
  ]);

  function changeTab(index) {
    console.log(localTime);
    dispatch(uiActions.switchTab(index));
  }

  return (
    <div class="header">
      <div class="appbar">
        <img id="burger-menu-icon-mobile" src={menuIcon} alt="burger" />
        <img src={logoWeb} alt="logo" />
        <div class="search-container">
          <input type="text" />
          <img src={searchIcon} alt="search" />
        </div>
        <img id="search-button-mobile" src={searchIcon} alt="search" />
      </div>
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
