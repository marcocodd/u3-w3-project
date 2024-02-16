import { Row, Col, Container } from "react-bootstrap";
import CardGenerator from "./CardGenerator";
const MainPage = () => {
 return (
  <>
   <Container className="overflow-auto ps-5" fluid>
    <Row className="row justify-content-evenly">
     <Col className="col-9 col-lg-11 d-none d-md-flex justify-content-center">
      <a className="text-secondary me-5" href="#">
       TRENDING
      </a>
      <a className="text-secondary me-5" href="#">
       PODCAST
      </a>
      <a className="text-secondary me-5" href="#">
       MOODS AND GENRES
      </a>
      <a className="text-secondary me-5" href="#">
       NEW RELEASES
      </a>
      <a className="text-secondary" href="#">
       DISCOVER
      </a>
     </Col>
    </Row>
    <Row className="row justify-content-evenly">
     <Col className="col-10">
      <div id="rock">
       <h2>Rock classics</h2>
       <CardGenerator query="rock" />
      </div>
     </Col>
    </Row>
    <Row className="row justify-content-evenly">
     <Col className="col-10">
      <div id="pop">
       <h2>Pop Culture</h2>
       <CardGenerator query="pop" />
      </div>
     </Col>
    </Row>
    <Row className="row justify-content-evenly">
     <Col className="col-10">
      <div id="hiphop">
       <h2>#HipHop</h2>
       <CardGenerator query="rap" />
      </div>
     </Col>
    </Row>
   </Container>
  </>
 );
};

export default MainPage;
