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
import { UserContext } from "../../context/UserContext";

import "./Sidebar.css";

//No logro hacer que me filtre los links segun el rol de usuario asi que cree cada rol por separado y se
//habria que guardarlo como [] a dicho rol o buscar la solucion al problema

const Sidebar = () => {
  const { decoder, logOut } = useContext(UserContext);

  const userLog = decoder();

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
            <NavLink onClick={logOut} className="foot nav-link">
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


export default Sidebar;
