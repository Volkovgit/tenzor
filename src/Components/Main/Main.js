import ArtistCard from "./Card/ArtistCard/ArtistCard";
import MusicCard from "./Card/MusicCard/MusicCard";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main-text-centered">
        <span className="main-text-centered__text h1 text_centred">Music</span>
      </div>
      <div className="main-card-list">
        <div className="cardList-header hotRightNow">
          <p class="cardList-header__text">Hot right now</p>
          <div class="cardList-header__underline"></div>
          <div className="card-list grid-6col">
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
            <ArtistCard></ArtistCard>
          </div>
        </div>
        <div className="cardList-header popularTracks">
          <p class="cardList-header__text">Popular track</p>
          <div class="cardList-header__underline"></div>
          <div className="card-list grid-3col">
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
