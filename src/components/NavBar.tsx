import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  setShowLikedCats: (show: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
  showLikedCats: boolean;
  sidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  setShowLikedCats,
  setSidebarOpen,
  showLikedCats,
  sidebarOpen,
}) => {
  return (
    <div className="navbar">
      <FontAwesomeIcon
        className="icon add"
        onClick={() => setShowLikedCats(!showLikedCats)}
        icon={faHeartCirclePlus}
      />
      <h1 className="title">CATinder</h1>
      <FontAwesomeIcon
        icon={faBars}
        className="icon hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
    </div>
  );
};

export default Navbar;
