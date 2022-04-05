import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import NavBar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { Tables } from '../components/Tables/Table'

function Alumnos() {
  return (
    

    <div className="d-flex justify-content-center align-item-center h-75">
        <Dashboard children={<Tables/>}/>
        
        
    </div>
  )
}

export default Alumnos