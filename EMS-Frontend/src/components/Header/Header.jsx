import { Container, Nav, Navbar } from "react-bootstrap";
  import { Link, useLocation } from "react-router-dom";
  import "./Header.css";

  export default function Header() {
    const { pathname } = useLocation();

    return (
      <Navbar expand="sm" className="app-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            <span className="brand-icon"></span>
            <span>EMS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto gap-1">
              <Nav.Link
                as={Link}
                to="/"
                className={`nav-item-link ${pathname === "/" ? "active" : ""}`}
              >
                Employees
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }