import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";
import sideLs from "../../constants/sideLinks";

import "./Sidebar.css";


const Sidebar = () => {
  const links = sideLs.map((link, index) =>  {
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
            <NavLink exact to="/login" className="foot">
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
