import { findByRole } from "@testing-library/react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { useContext } from "react";


import { Navigate, NavLink, useNavigate } from "react-router-dom";

import sideLs from "../../constants/sideLinks";
<<<<<<< HEAD
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

=======
import { UserContext } from "../../context/UserContext";
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca

import "./Sidebar.css";

//No logro hacer que me filtre los links segun el rol de usuario asi que cree cada rol por separado y se
//habria que guardarlo como [] a dicho rol o buscar la solucion al problema

const Sidebar = () => {
  const { decoder } = useContext(UserContext);

<<<<<<< HEAD
  const {logOut} = useContext(UserContext);{
=======
  const userLog = decoder();
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca

  const handleLogOut = () => {
    localStorage.clear();
  };

  const linksRol = sideLs.filter(
    (item) => item.role.includes(userLog.rol) === true
  );
  console.log(linksRol);

  const links = linksRol.map((link, index) => {
    return (
      <NavLink
        key={index}
        exat
        to={link.path}
        className={({ isActive }) => (isActive ? "activeClicked" : undefined)}
      >
        <CDBSidebarMenuItem className="item" icon={link.icon}>
          {link.innerText}
        </CDBSidebarMenuItem>
      </NavLink>
    );
  });

  return (
    <div className="d-flex side-head sticky-top ">
      <CDBSidebar
        textColor="var(--skobeloff)"
        backgroundColor="var(--platinum)"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            IPET 255
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>{links}</CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div>
<<<<<<< HEAD
            <NavLink exact to="/login" className="foot" onClick={logOut}>
=======
            <NavLink to="/" onClick={handleLogOut} className="foot nav-link">
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca
              <CDBSidebarMenuItem className="item" icon="sign-out-alt">
                Logout
              </CDBSidebarMenuItem>
            </NavLink>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
}

export default Sidebar;
