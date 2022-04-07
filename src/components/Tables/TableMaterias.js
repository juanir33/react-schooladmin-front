import React from "react";
import { Button, Col, Form, Table } from "react-bootstrap";
import './TableMaterias.css';

const alumnos = [
  {name: 'Jaimito',
  id:'J1',
   notas:[{
     matName:'matematica',
      primer:{
        nota1:'2',
        nota2:'3'
      },
    segundo:{
      nota1:'4',
        nota2:'5'

    },
  promedio:'7'}]},
  {name: 'Jaimita',
   id:'J2',
    
      matName:'matematica',
       primer:{
         nota1:'4',
         nota2:'5'
       },
     segundo:{
       nota1:'6',
         nota2:'6'
 
     },
   promedio:'6'}
  
]
const alumnosList = alumnos.map(alumno => {return( <tr>
          
  <td>{alumno.name}</td>
  <td>{alumno.primer.nota1}</td>
  <td>{alumno.primer.nota2}</td>
  
  <td></td>
  <td>9</td>
  <td>3</td>
  
  <td></td>
  
  <td></td>
  
</tr>

)})
export const TablesMaterias = () => {
  const pMedio = (a , b , c) =>{
    const promedio = Math.floor((a+b+c)/3)
    return promedio
  }
  return (
    <Table bordered hover responsive className="m-4 w-100">
      <Form/>
      <thead>
        <tr>
          <th colSpan="2" className="text-align-center">
            Ciclo Lectivo 2022
          </th>
          <th colSpan="2">Curso</th>
          <th colSpan="2">Legajo</th>
          <th>Turno</th>
          <th><Button className=''>Cargar Notas</Button></th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Alumnos</th>
          <th colSpan="3">Primer Cuatrimestre</th>
          <th colSpan="3">Segundo Cuatrimestre</th>
          
          <th >PROMEDIO FINAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th>1er</th>
          <th>2do</th>
          
          <th>Promedio</th>
          <th>1er</th>
          <th>2do</th>
          
          <th>Promedio</th>
          
          <th>Promedio</th>
         
        </tr>
        <tr>
          
          <td>MATEMATICA</td>
          <td>2</td>
          <td>2</td>
          
          <td>{pMedio(5, 3, 8)}</td>
          <td>9</td>
          <td>3</td>
          
          <td>{pMedio(9, 3, 10)}</td>
          
          <td>{pMedio(5, 7, 2)}</td>
          
        </tr>
        
        
      </tbody>
      <Form/>
    </Table>
  );
};

export default TablesMaterias;
