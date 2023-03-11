import "./SquareCard.css";
import drakePhoto from './drake.jpg'

function SquareCard(props) {
  return (
    <div className="squareCard">
      <img className="squareCard__img" src={props.image ? props.image[3]['#text'] : drakePhoto} alt="" />
      <div className="squareCard-description">
        <p className="squareCard-description__artist">{props.name}</p>
        <p className="squareCard-description__listeners">{props.listeners ? props.listeners + ' listeners' : props.author}</p>
      </div>
    </div>
    
  );
}

export default SquareCard;
