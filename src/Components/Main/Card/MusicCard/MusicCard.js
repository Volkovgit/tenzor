import "./MusicCard.css";
import trackImg from './track_img.png'

function MusicCard() {
  return (
    <div class="musicCard">
      <img class="musicCard__img" src={trackImg} alt="" />
      <div class="musicCard-text">
        <p class="musicCard-text__name">Track name</p>
        <p class="musicCard-text__artist">Artist Name</p>
        <p class="musicCard-text__type">hip-hop</p>
      </div>
    </div>
  );
}

export default MusicCard;
