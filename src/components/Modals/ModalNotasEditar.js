import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ModalContext } from "../../context/ModalContext";
import { sorted } from "../../helpers/alumnosSort";
import { users } from "../../helpers/data/users";

const ModalNotasEditar = () => {
  const { showE, handleCloseE } = useContext(ModalContext);
  const alumnos = users.sort(sorted).filter(user => user.rol === 'alumno')
  return (
    <>
      <Modal
        show={showE}
        onHide={handleCloseE}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>Editar notas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            
            <ul className="w-100">
              {alumnos.map(alumno => {return(<li className="d-flex w-75 justify-content-between my-2">{alumno.profile.apellido.toUpperCase() + ' ' + alumno.profile.nombre.toUpperCase()} <Form.Control type='number' placeholder='Nota'className=' w-25'/> </li>)})}

            </ul>
          
          
          
        </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="btns" onClick={handleCloseE}>
            Editar Notas
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNotasEditar;
