import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Cat } from "../types/Cat";

interface CatCardProps {
  cat: Cat;
  swipe: string;
  imageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
  handleDislike: () => void;
  handleLike: () => void;
}

const CatCard: React.FC<CatCardProps> = ({
  cat,
  swipe,
  imageLoaded,
  setImageLoaded,
  handleDislike,
  handleLike,
}) => {
  return (
    <div className="card">
      <div className={`card-image ${swipe}`}>
        <img
          className={`image ${imageLoaded ? "image-loaded" : ""}`}
          src={cat.image}
          alt={cat.name}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="content">
        <h1 className="name">{cat.name}</h1>
        <h5>{cat.description}</h5>
      </div>

      <div>
        <FontAwesomeIcon
          onClick={handleDislike}
          icon={faXmark}
          className="icon dislike"
        />
        <FontAwesomeIcon
          onClick={handleLike}
          icon={faHeart}
          className="icon like"
        />
      </div>
    </div>
  );
};

export default CatCard;
