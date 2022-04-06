import React from "react";
import { Button, Col, Form, FormControl, Table } from "react-bootstrap";
import './TableMaterias.css';

const data = [
  {name: 'Jaimito',
   id:'J1',
   
   mat:[{matName: 'Matematica', nota1: '',nota2: 4,nota3: 5,nota4:6,nota5: 7},{matName: 'Lengua', nota1: 3,nota2: 4,nota3: 5,nota4: 7,nota5: 9}]},
   {name: 'Jaimita',
   id:'J2',
   
    mat:[{matName: 'Matematica', nota1: 3,nota2:1,nota3: 7,nota4: 8,nota5: 9},{matName: 'Lengua', nota1: 9,nota2: 9,nota3: 9,nota4: 9,nota5: 9}]},
   {name: 'Jasinta',
   id:'J3',
   
    mat:[{matName: 'Matematica', nota1: 10,nota2: 3,nota3: 6,nota4: 9,nota5: 10},{matName: 'Lengua', nota1:7,nota2: 6,nota3: 6,nota4:6,nota5: 4}]},
   
  
]

const matActual = 'Matematica' 

const filter = data.map( date => {return {id:date.id, name:date.name, notas: (date.mat.filter( el => el.matName === matActual).map(item => {return ([ item.nota1,  item.nota2, item.nota3, item.nota4,  item.nota5,] )}))}})
console.log(filter);

const listafiltrada= filter.map( (fil  ) => {return (<tr key={fil.id}>
  <td>{fil.name}</td>
  <td><Form.Control type= 'number' min='0' max='10' step='0.01' /> </td>
  <td>{fil.notas[0][1]}</td>
  
  <td>{fil.notas[0][2]}</td>
  <td>{fil.notas[0][3]}</td>
  <td>{fil.notas[0][4]}</td>
  
  <th>{Math.floor((fil.notas[0][0]+fil.notas[0][1]+fil.notas[0][2]+fil.notas[0][3]+fil.notas[0][4])/5)}</th>
  
  
 
</tr>)})


console.log();


export const TablesMaterias = () => {
 
  
  return (
    <>
    <Form/>
    <Table bordered hover responsive className="m-4 w-100">
      
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
          
          <th>3ero</th>
          <th>4to</th>
          <th>5to</th>
          
          <th>Promedio</th>
          
          
         
        </tr>
        
        
          {listafiltrada}
          
        
        
        
      </tbody>
      
    </Table>
    <Form/>
    </>
  );
};

export default TablesMaterias;
