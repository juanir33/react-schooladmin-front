import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Table } from "react-bootstrap";
import { ModalContext } from "../../context/ModalContext";
import { sorted } from "../../helpers/alumnosSort";

import useForm from "../../hooks/useForm";
import ModalNotas from "../Modals/ModalNotas";
import ModalNotasEditar from "../Modals/ModalNotasEditar";
import "./TableMaterias.css";
import { UserContext } from "../../context/UserContext";
import axiosClient from "../../config/axiosClient";

export const TablesMaterias = () => {
  const { decoder, getAuth } = useContext(UserContext);
  const [alumnos, setAlumnos] = useState([]);
  const [materia, setMateria] = useState([]);
  
  const profesor = decoder();
  const nombreProf = profesor.profile.apellido;
  const idProfesor = profesor._id;
  const { handleShowN, handleShowE } = useContext(ModalContext);
  const curso = "Segundo B";

  localStorage.setItem("curso", JSON.stringify({ nombre: "Segundo B", _id: '6259c04c20ee4378a20edff6' }));

  const getAlumnos = async () => {
    getAuth();
    const { data } = await axiosClient.get("users/list");
    const alumnos = data.users.filter((user) => user.rol === "alumno");
    console.log(alumnos);
    setAlumnos(alumnos);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  };

  const getMAterias = async () => {
    getAuth();
    const { data } = await axiosClient.get("materias");
    const mate = data.materias;
    console.log(mate);
    setMateria(data.materias);

    localStorage.setItem("materias", JSON.stringify(mate));
  };

  useEffect(() => {
    getAlumnos();
    getMAterias();
  }, []);

  const handleChange = (e)=>{

    localStorage.setItem('materiaSelected', JSON.stringify(e.target.value))

  }

  
  




  

  const listafiltrada = alumnos.map((fil, index) => {
    return (
      <tr key={index}>
        <td>{fil.profile.apellido + " " + fil.profile.nombre}</td>
        {/* //Aqui hariamos los pedidos, de notas y mostrar en la tabla  */}
        

      </tr>
    );
  });

  return (
    <>
      <ModalNotas />
      <ModalNotasEditar />
      <form />
      <Table bordered hover responsive className="m-4 w-100">
        <thead>
          <tr>
            <th colSpan="2" className="text-align-center">
              Ciclo Lectivo 2022
            </th>
            <th colSpan="2">{curso}</th>
            <th colSpan="2">{nombreProf}</th>
            <th>
              <Form.Select aria-label="Default select example" onChange={handleChange}>
                <option>Elegir materia</option>
                {materia.map((item) => (
                  <option value={item._id}>{item.nombre}</option>
                ))}
              </Form.Select>
            </th>
            <th>
              <Button
                variant="primary"
                className="btns p-2 mx-1"
                onClick={handleShowN}
              >
                Cargar
              </Button>
              <Button
                variant="primary"
                className="btns p-2 mx-1"
                onClick={handleShowE}
              >
                Editar
              </Button>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Alumnos</th>
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
      <form />
    </>
  );
};

export default TablesMaterias;
