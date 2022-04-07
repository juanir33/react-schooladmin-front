import React from "react";
import { Table } from "react-bootstrap";

export const Tables = () => {
  const pMedio = (a , b , c) =>{
    const promedio = Math.floor((a+b+c)/3)
    return promedio
  }
  return (
    <Table bordered hover responsive className="m-4 w-100">
      <thead>
        <tr>
          <th colSpan="2" className="text-align-center">
            Ciclo Lectivo 2022
          </th>
          <th colSpan="2">Curso</th>
          <th colSpan="2">Legajo</th>
          <th>Turno</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Materia</th>
          <th colSpan="4">Primer Trimestre</th>
          <th colSpan="4">Segundo Trimestre</th>
          <th colSpan="4">Tercer Trimestre</th>
          <th >PROMEDIO FINAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th>1er</th>
          <th>2do</th>
          <th>3er</th>
          <th>Promedio</th>
          <th>1er</th>
          <th>2do</th>
          <th>3er</th>
          <th>Promedio</th>
          <th>1er</th>
          <th>2do</th>
          <th>3er</th>
          <th>Promedio</th>
         
        </tr>
        <tr>
          <td>MATEMATICA</td>
          <td>5</td>
          <td>3</td>
          <td>8</td>
          <td>{pMedio(5, 3, 8)}</td>
          <td>9</td>
          <td>3</td>
          <td>10</td>
          <td>{pMedio(9, 3, 10)}</td>
          <td>5</td>
          <td>3</td>
          <td>0</td>
          <td>{pMedio(5, 3, 0)}</td>
          <td>{pMedio(5, 7, 2)}</td>
          
        </tr>
        <tr>
        <td>FISICA</td>
          <td>5</td>
          <td>3</td>
          <td>8</td>
          <td>{pMedio(5, 3, 8)}</td>
          <td>10</td>
          <td>3</td>
          <td>9</td>
          <td>{pMedio(10, 3, 9)}</td>
          <td>5</td>
          <td>5</td>
          <td>8</td>
          <td>{pMedio(5, 5, 8)}</td>
          <td>{pMedio(5, 7, 6)}</td>
        </tr>
        <tr>
        <td>LENGUA</td>
          <td>5</td>
          <td>9</td>
          <td>8</td>
          <td>{pMedio(5, 9, 8)}</td>
          <td>5</td>
          <td>6</td>
          <td>8</td>
          <td>{pMedio(5, 6, 8)}</td>
          <td>5</td>
          <td>8</td>
          <td>8</td>
          <td>{pMedio(5, 8, 8)}</td>
          <td>{pMedio(7, 6, 7)}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Table;
