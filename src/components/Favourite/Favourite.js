export default function FavouriteComponent() {
  return (
    <div class="container">
      <div class="inner-empty">
        <div class="nothing"></div>
        <div class="no-favourites-added">No Favourites added</div>
      </div>
      <div class="inner">
        <div id="title">favList.length City added as favourite</div>
        <div class="fav-list-container">
          <div class="fav-container-text">.location.name,i.location.region</div>
          <div class="fav-container-center-item">
            <img src="" height="38px" width="36px" alt="" />
            <div class="fav-container-center-item2">
              <div class="element">i.current.temp_c</div>
              <div class="element2">
                <sup>0</sup>
              </div>
              <div class="element3">c</div>
            </div>
            <div class="fav-container-center-item3">
              i.current.condition.text
            </div>
          </div>
          <button class="fav-button"></button>
        </div>
      </div>
    </div>
  );
}
