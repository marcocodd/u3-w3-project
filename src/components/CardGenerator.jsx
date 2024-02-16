// urlFetch https://striveschool-api.herokuapp.com/api/deezer/search?q={query}
import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectSongAction } from "../redux/actions/SelectedSongAction";

const CardGenerator = ({ query }) => {
 const [arrayMusic, setArrayMusic] = useState([]);
 const dispatch = useDispatch();

 const handleSelectedSong = (selectedSong) => {
  dispatch(selectSongAction(selectedSong));
 };

 useEffect(() => {
  const fetchCards = async () => {
   try {
    const response = await fetch(
     `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
    );
    if (response.ok) {
     const arrayData = await response.json();
     console.log(arrayData);
     setArrayMusic(arrayData.data.slice(0, 4));
    } else {
     console.log(response.status);
    }
   } catch (error) {
    console.log("Error retrieving data:", error);
   }
  };

  fetchCards();
 }, []);

 return (
  <Row className="mb-4">
   {arrayMusic &&
    arrayMusic.map((array, index) => (
     <Col className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
      <img
       className="img-fluid img-thumbnail"
       src={array.album.cover_medium}
      ></img>
      <p>Track: {array.album.title}</p>
      <p>Artist: {array.artist.name}</p>
      <Button
       onClick={() => handleSelectedSong(array)}
       className="rounded-5"
       variant="success"
      >
       Play
      </Button>
      <i onClick="" className="bi bi-suit-heart ms-2"></i>
     </Col>
    ))}
  </Row>
 );
};

export default CardGenerator;
