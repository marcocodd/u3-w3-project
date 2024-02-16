import shuffleButton from "../assets/playerbuttons/shuffle.png";
import playButton from "../assets/playerbuttons/play.png";
import prevButton from "../assets/playerbuttons/prev.png";
import nextButton from "../assets/playerbuttons/next.png";
import repeatButton from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
const Player = () => {
 const selectedSong = useSelector((state) => state.selectedSong);
 console.log("prova", selectedSong);

 return (
  <div className="container-fluid fixed-bottom bg-secondary pt-1">
   <div className="row h-100">
    <div className="col-lg-10 offset-lg-2">
     <div className="row h-100 flex-column justify-content-center align-items-center">
      <div className="col-6 col-md-4 playerControls">
       <div className="d-flex">
        {selectedSong && selectedSong.selectedSong.album && (
         <img
          src={selectedSong.selectedSong.album.cover_small}
          alt="Album Cover"
         />
        )}
        <a href="#">
         <img src={shuffleButton} alt="shuffle" />
        </a>
        <a href="#">
         <img src={prevButton} alt="prev" />
        </a>
        <a href="#">
         <img src={playButton} alt="play" />
        </a>
        <a href="#">
         <img src={nextButton} alt="next" />
        </a>
        <a href="#">
         <img src={repeatButton} alt="repeat" />
        </a>
       </div>
       <div className="progress mt-3">
        <div role="progressbar"></div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Player;
