import "./App.css";
import { useState } from "react";
import { cats } from "./data/cats";
import { Cat } from "./types/Cat";
import CatCard from "./components/CatCard";
import Sidebar from "./components/SideBar";
import LikedCats from "./components/LikedCats";
import Navbar from "./components/NavBar";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipe, setSwipe] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [likedCats, setLikedCats] = useState<Cat[]>([]);
  const [showLikedCats, setShowLikedCats] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLike = () => {
    setLikedCats([...likedCats, cats[currentIndex]]);
    setSwipe("swipe-right");
    setImageLoaded(false);
    setTimeout(() => {
      // console.log(`You liked ${cats[currentIndex].name}`);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSwipe("");
    }, 500);
  };

  const handleDislike = () => {
    setSwipe("swipe-left");
    setImageLoaded(false);
    setTimeout(() => {
      // console.log(`You disliked ${cats[currentIndex].name}`);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSwipe("");
    }, 500);
  };

  const closeLikedCats = () => {
    setShowLikedCats(false);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar
        setShowLikedCats={setShowLikedCats}
        setSidebarOpen={setSidebarOpen}
        showLikedCats={showLikedCats}
        sidebarOpen={sidebarOpen}
      />

      {/* Overlay */}
      {(sidebarOpen || showLikedCats) && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/*CatCard*/}
      {currentIndex < cats.length ? (
        <CatCard
          cat={cats[currentIndex]}
          swipe={swipe}
          imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}
          handleDislike={handleDislike}
          handleLike={handleLike}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Whoops!! no more kittens :(</h1>
      )}

      {/* LikedCats */}
      {showLikedCats && (
        <LikedCats
          className={showLikedCats ? "open" : ""}
          likedItems={likedCats}
          onClose={closeLikedCats}
        />
      )}
    </div>
  );
}

export default App;
// i want to separate into a component this part of the code and the import it to app.jsx correctly
