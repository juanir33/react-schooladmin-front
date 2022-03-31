import React from 'react'

import { Tables } from '../Tables/Table'
import NavBar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Dashboard = ({children}) => {
  return (
    <div className="dashboard d-flex">
        <div>
            <Sidebar/>
        </div>
        <div className="d-flex flex-column w-100 nav">
            <NavBar/>
            <div className='main-content d-flex w-100 justify-content-center flex-wrap'>
                {children}
            <Tables/>
            <Tables/>
            <Tables/>
            <Tables/>
            <Tables/>
            </div>
            <br />
            
            
        </div>


    </div>
  )
}

export default Dashboard