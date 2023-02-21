import "./ArtistCard.css";
import trackImg from './track_img.png'

function ArtistCard(props) {
  return (
    <div className="card">
    <img className="card__img" src={trackImg} alt="" />
    <div className="card-text">
      <p className="card-text__name">{props.name}</p>
      <p className="card-text__type">{props.type.join(', ')}</p>
    </div>
  </div>
  );
}

export default ArtistCard;
