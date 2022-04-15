import React from 'react'
import Cards from '../components/Cards/Cards'
import Dashboard from '../components/Dashboard/Dashboard'
import NavBar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import TablesMaterias from '../components/Tables/TableMaterias'


function Alumnos() {

  return (
    

    <div className="container w-75 d-flex justify-content-center">
        
        <Cards titulo='Materia' texto='notas varias notas' boton='imprimir' />
        <Cards titulo='Materia' texto='notas varias notas' boton='imprimir' />
        <Cards titulo='Materia' texto='notas varias notas' boton='imprimir' />
      </div>  
    
  )
}

export default Alumnos