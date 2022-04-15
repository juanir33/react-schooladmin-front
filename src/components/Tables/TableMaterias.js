import React, { useContext, useState } from "react";
import { Button, Col, Form, FormControl, Table } from "react-bootstrap";
import { ModalContext } from "../../context/ModalContext";
import { sorted } from "../../helpers/alumnosSort";

import useForm from "../../hooks/useForm";
import ModalNotas from "../Modals/ModalNotas";
import ModalNotasEditar from "../Modals/ModalNotasEditar";
import "./TableMaterias.css";

const getUsers = () => {
  const response = localStorage.getItem("users");
  const users = JSON.parse(response);
  return users;
};

const alumnos = getUsers()
  .sort(sorted)
  .filter((user) => user.rol === "alumno");

// queda conseguir que aparezca el formulario para editar la nota cuando esta vacio el valor de la misma y muestre cuando hay una creada

export const TablesMaterias = () => {
  const { handleShowN, handleShowE } = useContext(ModalContext);

  const listafiltrada = alumnos.map((fil, index) => {
    return (
      <tr key={index}>
        <td>{fil.profile.apellido + " " + fil.profile.nombre}</td>
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
            <th colSpan="2">Curso</th>
            <th colSpan="2">Profesor</th>
            <th>Materia</th>
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
