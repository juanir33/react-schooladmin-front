import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    

  } from 'cdbreact'; 

  import { NavLink } from 'react-router-dom';
  import { FaJenkins } from "react-icons/fa";
  import { Button } from 'react-bootstrap';
  import './Sidebar.css'



const Sidebar = () => {
    return (
      <div className='d-flex side-head sticky-top ' >
        <CDBSidebar textColor='var(--skobeloff)' backgroundColor="var(--platinum)">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              IPET 255 
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink  exat to="/" className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined }>
              <CDBSidebarMenuItem  className="item" icon='home'>Panel</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/tables" className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined }
            >
              <CDBSidebarMenuItem className="item"
              icon="users">Alumnos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/profile" className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined
            }>
              <CDBSidebarMenuItem className='item' icon="user-tie">Profesores</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/analytics" className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined
            }>
              <CDBSidebarMenuItem className="item" icon="chalkboard">Materias</CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/hero404"  className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined
            }>
              <CDBSidebarMenuItem className='item' icon="list-ol">Grados</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/panel" className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined
            }>
              <CDBSidebarMenuItem className='item' icon="user-clock">Preceptores</CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/aa"  className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined
            }>
              <CDBSidebarMenuItem className='item' icon="pen-alt">Notas</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/aa"  className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined
            }>
              <CDBSidebarMenuItem className='item' icon="hand-paper">Asistencias</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/aa"  className={({ isActive }) =>
              isActive ? 'activeClicked' : undefined
            }>
              <CDBSidebarMenuItem className='item' icon="chart-line">Reportes</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
  
          <CDBSidebarFooter >
            <div
              
            >
              <NavLink exact to="/login" className="foot" >
               <CDBSidebarMenuItem  className='item' icon="sign-out-alt">Logout</CDBSidebarMenuItem>
                
              </NavLink>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;