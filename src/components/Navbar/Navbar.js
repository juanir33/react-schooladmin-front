import { Navbar, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import { MdEmail, MdNotificationsActive } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import {useContext, useEffect} from 'react'
import { UserContext } from "../../context/UserContext";
import jwt_decode from 'jwt-decode'

const NavBar = () => {
  const { pathname } = useLocation();
<<<<<<< HEAD
  //const user = localStorage.getItem('user');
  const user = "Usuario Logeado";

=======
  const {decoder} = useContext(UserContext)
  const log = decoder();
  
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca
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
<<<<<<< HEAD
                {user}
=======
                {log.profile.apellido +' '+ log.profile.nombre}
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
