import "./ArtistCard.css";
import trackImg from './track_img.png'

function ArtistCard() {
  return (
    <div class="card">
    <img class="card__img" src={trackImg} alt="" />
    <div class="card-text">
      <p class="card-text__name">Kanye West</p>
      <p class="card-text__type">hip-hop</p>
    </div>
  </div>
  );
}

export default ArtistCard;
