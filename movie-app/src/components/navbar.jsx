import {
  Container,
  Navbar,
  Form,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "../App.css";
import Logo from "../assets/assets/Logo.svg";
import Search from "../assets/assets/Search.svg";
import MenuIcon from "../assets/assets/Menu.svg";

function Navigation() {
  return (
    <>
      {["lg"].map((expand, index) => (
        <Navbar expand="lg" key={index}>
          <Container>
            <Navbar.Brand href="#">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="mx-auto w-50">
                  <div className="input-group">
                    <Form.Control
                      type="search"
                      placeholder="What do you want to watch?"
                      aria-label="Search"
                    />
                    <span>
                      <img
                        src={Search}
                        alt="Search Icon"
                        style={{ marginLeft: 3 }}
                      />
                    </span>
                  </div>
                </Form>
                <Nav className="ml-auto">
                  <Nav.Link href="#action1" style={{ color: "white" }}>
                    Sign in{" "}
                    <span>
                      <img src={MenuIcon} alt="Menu Icon" />
                    </span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation