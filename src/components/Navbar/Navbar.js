import {
  Navbar,
  Container,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import "./Navbar.css";
import { MdEmail, MdNotificationsActive } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import {HiOutlineLogout} from 'react-icons/hi'

const NavBar = () => {
  const { pathname } = useLocation();
  const { decoder , logOut} = useContext(UserContext);
  const log = decoder();
  const navigate = useNavigate()
  const handlePerfil =() =>{

    navigate('/perfil')
    

  }

  return (
    <div className="sticky-top">
      <Navbar className="nav-head d-flex">
        <Container>
          {pathname === "/login" ? (
            <Navbar.Collapse className="justify-content-center">
              <Navbar.Text className="nav-text">IPET 255</Navbar.Text>
            </Navbar.Collapse>
          ) : (
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
                <Dropdown as={ButtonGroup} className=" nav-link ">
                  <Button className="btns " onClick={handlePerfil} >
                    {log.profile.apellido + " " + log.profile.nombre}
                  </Button>

                  <Dropdown.Toggle
                    split
                    className="btns"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item ><Link to="/profile" className="nav-link" id="user-a">Noticias</Link></Dropdown.Item>
                    <Dropdown.Item>
                    <Link to="/404" className="nav-link" id="user-a">Mensajes</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item >
                    <Button   onClick= {logOut} className=" " id="user-a">   Cerrar sesion </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
              </Navbar.Text>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
