import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useApi from "../utilities/http";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const { token, user, removeItem } = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await api.post("/logout");
      removeItem("token");
      removeItem("user");
      navigate("/");
      navigate(0);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
      style={{ fontFamily: "serif" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          El Elohe Barbeque House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            {!token ? (
              <div className="d-lg-flex w-100 justify-content-end">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/Register">
                  Register
                </Nav.Link>
              </div>
            ) : (
              <div className="d-lg-flex w-100 justify-content-end">
                <Nav.Link as={Link} to={`/profile/${user?.id}`}>
                  {user?.first_name}
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;