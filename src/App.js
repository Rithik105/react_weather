import "./App.css";
import HeaderComponent from "./components/Header/Header";
import styled from "styled-components";
import background from "./assets/images/background.png";
import WeatherComponent from "./components/Weather/Weather";
import FavouriteComponent from "./components/Favourite/Favourite";
import RecentComponent from "./components/Recent/Recent";
import { useDispatch, useSelector } from "react-redux";



function App() {
  const [tab] = useSelector((state) => [state.ui.tab]);

 

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
