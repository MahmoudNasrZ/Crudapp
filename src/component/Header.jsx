import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { logInAndOut } from "../Store/authoritySlice";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
function Header() {
  const { isLoggedIn } = useSelector((state) => state.authorization);
  const dispatch = useDispatch();
  console.log(isLoggedIn);
  return (
    <header>
      <h1 style={{ margin: "15px 0px " }}>CRUDAPP</h1>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
            <NavLink className="nav-link" to="post/add" end>
              Add
            </NavLink>
            <NavLink className="nav-link" to="/post/1/details" end>
              kosa
            </NavLink>
            <span className="Square"></span>
          </Nav>
          <Button className="blueBox" onClick={() => dispatch(logInAndOut())}>
            <span>{isLoggedIn ? "LoggedIn" : "Sign in"}</span>
          </Button>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
