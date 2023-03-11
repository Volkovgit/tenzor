import "./TrackCard.css";

function TrackCard(props) {
  return (
    <div className="track_card">
      <div className="play-button-outer">
        <svg fill="#000000" className="svgPlayButton" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M175 .024V1920l1570.845-959.927z"/>
        </svg>
      </div>
      <div className="img_track_container">
        <img className="img_track" src={props.images[3]['#text']} alt="" />
      </div>
      <div className="play-button-outer">
        <svg viewBox="0 0 24 24" className="svgPlayButton" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill="#000000" />
        </svg>
      </div>
      <div className="song_name_container">
        <p className="song_name">{props.name}</p>
      </div>
      <div className="song__artis_container">
        <p className="artist_name_text">{props.artist}</p>
      </div>
      <div className="song__time_container">
        <p className="time_name">
          {Math.floor(props.duration / 60000)}:{Math.floor(props.duration - Math.floor(props.duration / 60000) * 60000) / 1000}
        </p>
      </div>
    </div>
  );
}

export default TrackCard;
