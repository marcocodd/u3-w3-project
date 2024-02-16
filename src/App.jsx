
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomNav from "./components/CustomNav";
import MainPage from "./components/MainPage";
import Player from "./components/Player";
function App() {
 return (
  <>
   <Container fluid className="text-white">
    <Row className="h-100">
     <Col className="col col-lg-2 p-0 navbarcustom">
      <CustomNav />
     </Col>
     <Col className="col-12 col-md-6 col-lg-10 bg-dark ps-5 m-0">
      <MainPage />
     </Col>
    </Row>
   </Container>
   <Container fluid>
    <Player />
   </Container>
  </>
 );
}

export default App
