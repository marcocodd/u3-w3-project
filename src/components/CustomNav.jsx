import {
 Navbar,
 Container,
 Nav,
 InputGroup,
 Button,
 Form,
} from "react-bootstrap";
import logoNav from "../assets/logo/logo.png";

const CustomNav = () => (
 <Navbar
  expand="lg"
  fixed="left"
  className="bg-black navbarcustom position-fixed"
 >
  <Navbar.Collapse id="basic-navbar-nav">
   <Container className="flex-column align-items-start">
    <Navbar.Brand href="#home">
     <img width={100} src={logoNav} alt="logo image" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="me-auto flex-column navbarcustom ">
     <Container>
      <Nav.Link className="text-secondary d-flex" href="#home">
       <i className="bi bi-house-door-fill"></i>
       Home
      </Nav.Link>
      <Nav.Link className="text-secondary d-flex" href="#link">
       <i className="bi bi-book-fill"></i>Your Library
      </Nav.Link>
      <InputGroup className="mb-3">
       <Form.Control
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
       />
       <Button variant="outline-secondary" id="button-addon2">
        Go
       </Button>
      </InputGroup>
     </Container>

     <Container className="d-flex flex-column">
      <Button variant="light">Sign Up</Button>
      <Button variant="dark">Login</Button>
     </Container>
    </Nav>
   </Container>
  </Navbar.Collapse>
 </Navbar>
);

export default CustomNav;
