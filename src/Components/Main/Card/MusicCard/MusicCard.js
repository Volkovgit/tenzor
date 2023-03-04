import "./MusicCard.css";

function MusicCard(props) {
  console.log(props);
  return (
    <div className="musicCard">
      <img className="musicCard__img" src={props.images[2]['#text']} alt="" />
      <div className="musicCard-text">
        <p className="musicCard-text__name">{props.name}</p>
        <p className="musicCard-text__artist">{props.artist.name}</p>
        <p className="musicCard-text__type">{props.type.join(', ')}</p>
      </div>
    </div>
  );
}

export default MusicCard;
