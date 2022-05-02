
import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";
import './Modal.css'




const ModalEditRol = () => {
    const {showR, handleCloseR, id } = useContext(ModalContext);
     const {getAuth} = useContext(UserContext);
    const [value, setValue] = useState(null);
  
    const handleKeyUp = (e) => {
      console.log(e.target.value);
      
      setValue({
        
        [e.target.id]: e.target.value
      })
    }
  
    const handleClick = async (e) => {
        e.preventDefault();
        getAuth();
        const userId = id;
        const sendData =  {rol: value.rol.toLowerCase()};
        const data = (`users/changerol/${userId}`);
       console.log(id);
      } 
    
      
    
    
  
    return (
      <>
        <Modal
          show={showR}
          onHide={handleCloseR}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton className="m-header">
            <Modal.Title>Cambiar rol de usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
            <Form >
              
                      <Form.Control
                        type="text"
                        placeholder="Nuevo rol"
                        className=" w-75"
                        id='rol'
                    
                       onKeyUp={handleKeyUp}
                       />                    
               
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btns" onClick={handleClick}>
              Editar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default ModalEditRol;