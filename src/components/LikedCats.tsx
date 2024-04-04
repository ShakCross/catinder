import React from "react";
import { Cat } from "../types/Cat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface LikedCatsProps {
  likedItems: Cat[];
  onClose: () => void;
  className: string;
}

const LikedCats: React.FC<LikedCatsProps> = ({
  likedItems,
  onClose,
  className,
}) => {
  return (
    <div className={`liked-cats ${className}`}>
      <h2>Liked Cats</h2>
      <FontAwesomeIcon
        className="icon close"
        onClick={onClose}
        icon={faTimes}
      />
      {likedItems.map((item, index: number) => {
        return (
          <div key={index}>
            <h3>{item.name}</h3>
            <img className="liked-image" src={item.image} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default LikedCats;
