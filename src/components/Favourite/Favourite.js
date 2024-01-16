import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import heartIcon from "../../assets/images/icon_favourite_Active.png";
import heartIcon_outline from "../../assets/images/heart.png";
import { favActions } from "../../store/favouriteSlice";

export default function FavouriteComponent() {
  const dispatch = useDispatch();
  const [favList] = useSelector((state) => [state.favourite.favourite]);
  function addFav(item) {
    dispatch(favActions.addToFav(item));
  }
  function removeFav(item) {
    dispatch(favActions.removeFromFav(item));
  }
  return (
    <div class="container">
      {favList.length === 0 ? (
        <div class="inner-empty">
          <div class="nothing"></div>
          <div class="no-favourites-added">No Favourites added</div>
        </div>
      ) : (
        <div class="inner">
          <div id="title">{favList.length} City added as favourite</div>
          {favList.map((item) => (
            <div class="fav-list-container">
              <div class="fav-container-text">
                {item.location.name},{item.location.region}
              </div>
              <div class="fav-container-center-item">
                <img
                  src={item.current.condition.icon}
                  height="38px"
                  width="36px"
                  alt=""
                />
                <div class="fav-container-center-item2">
                  <div class="element">{item.current.temp_c}</div>
                  <div class="element2">
                    <sup>0</sup>
                  </div>
                  <div class="element3">c</div>
                </div>
                <div class="fav-container-center-item3">
                  {item.current.condition.text}
                </div>
              </div>
              <FavButton
                onClick={
                  favList.findIndex(
                    (obj) => obj.location.name === item.location.name
                  ) !== -1
                    ? () => removeFav(item)
                    : () => addFav(item)
                }
                img={
                  favList.findIndex(
                    (obj) => obj.location.name === item.location.name
                  ) !== -1
                    ? heartIcon
                    : heartIcon_outline
                }></FavButton>
            </div>
          ))}
        </div>
      )}
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
