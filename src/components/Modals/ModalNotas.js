import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";
import { sorted } from "../../helpers/alumnosSort";
import {FaCheck} from 'react-icons/fa'
import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";
import axiosClient from "../../config/axiosClient";


const ModalNotas = () => {
  const { showN, handleCloseN } = useContext(ModalContext);
  const {decoder, getAuth} = useContext(UserContext);
  const [values, setValues] = useState('') ;
  const profesor = decoder().id;
  const materiaSelected = JSON.parse(localStorage.getItem('materiaSelected'));
  const curso  =  JSON.parse(localStorage.getItem('curso'));
  const alumnos = JSON.parse(localStorage.getItem('alumnos'));
  console.log(alumnos);
  console.log(profesor);
  
  const handleKeyUp = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    
    setValues({
      
      [e.target.name]: e.target.value
    })
  }

  const handleClick = async (e) => {
    getAuth() ;
    const sendData = {
      profesor: `${profesor}`,
      materia: `${materiaSelected}`,
      curso: `${curso._id}`,
      alumno: `${e.target.id}`,
      notas: [parseInt(values.nota)]
      
    };console.log(sendData);
    
    try {
      const respuesta = await axiosClient.post('notas', sendData);
      console.log(respuesta.data);

    } catch (error) {
      
    }
    

   




  }

  




  
  
  

  return (
    <>
      <Modal
        show={showN}
        onHide={handleCloseN}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="m-header">
          <Modal.Title>Carga de notas</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-header">
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
                      name="nota"
                     onKeyUp={handleKeyUp}
                     id={alumno.id}/>
                     <Button id={alumno._id} className='btns btn'onClick={handleClick}><FaCheck/></Button>
                  </li>

                );
              })}
            </ul>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNotas;
