import { Navbar, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import { MdEmail, MdNotificationsActive } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  //const user = localStorage.getItem('user');
  const user = "Usuario Logeado";

  return (
    <div className="sticky-top">
      <Navbar className="nav-head d-flex">
        <Container>
          {pathname === "/login"?
          <Navbar.Collapse className="justify-content-center" >
            <Navbar.Text className="nav-text">IPET 255</Navbar.Text>
          </Navbar.Collapse>
          :
          <Navbar.Collapse className="justify-content-end">
            <Button
              variant="primary"
              size="sm"
              className="m-3 nav-buttons position-relative"
            >
              <MdEmail />
              <span className=" bad position-absolute top-0 start-100 translate-middle p-2  border border-light rounded-circle"></span>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="m-3 nav-buttons position-relative"
            >
              <MdNotificationsActive />
              <span className=" bad position-absolute top-0 start-100 translate-middle p-2  border border-light rounded-circle"></span>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <Navbar.Text>
              <Link to="/profile" className="nav-link " id="user-a">
                {user}
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
