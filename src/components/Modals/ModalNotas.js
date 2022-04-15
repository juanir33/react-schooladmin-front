import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ModalContext } from "../../context/ModalContext";
import { sorted } from "../../helpers/alumnosSort";



const ModalNotas = () => {
  const { showN, handleCloseN } = useContext(ModalContext);
   
  const [values, setValues] = useState('')

  const handleKeyUp = (e) => {
    console.log(e.target.value);
    
    setValues([{
      ...values,
      [e.target.id]: e.target.value
    }])
  }

  const handleClick = (e) => {
    console.log(values);

  }
  
  const getUsers = () => {
    const response = localStorage.getItem('users');
    const users = JSON.parse(response)
    return users
  }
  
  
  const alumnos = getUsers().sort(sorted).filter((user) => user.rol === "alumno");

  return (
    <>
      <Modal
        show={showN}
        onHide={handleCloseN}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Carga de notas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <ul className="w-100">
              {alumnos.map((alumno) => {
                return (
                  <li className="d-flex w-75 justify-content-between my-2">
                    {alumno.profile.apellido.toUpperCase() +
                      " " +
                      alumno.profile.nombre.toUpperCase()}{" "}
                    <Form.Control
                      type="number"
                      placeholder="Nota"
                      className=" w-25"
                      min="1"
                      max="10"
                      step="0.01"
                     onKeyUp={handleKeyUp}
                     id={alumno.id}/>{" "}
                  </li>
                );
              })}
            </ul>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btns" onClick={handleClick}>
            Cargar datos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNotas;
