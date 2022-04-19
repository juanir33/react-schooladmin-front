


import React, { useContext, useState } from 'react'
import { Tabs , Tab, Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';
import { FaAddressCard, FaNapster, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import axiosClient from '../../config/axiosClient';
import { UserContext } from '../../context/UserContext';
import useForm from '../../hooks/useForm';
import Cards from '../Cards/Cards';



const UserProfile = () => {

  const {decoder, getAuth}  = useContext(UserContext);
  const valuesI = [];
  const [key, setKey] = useState("home");
  const {handleKeyUp, values} = useForm(valuesI);
  const userLog = decoder();
  
  const idLogUrl = `/users/profile/${userLog.id}`
  getAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  

  const handleDatosPerfil = async (e)=>{  
     e.preventDefault();
     
     const transform = {profile:{
         nombre: values.nombre,
         apellido: values.apellido,
         domicilio: values.domicilio,
         telefonos: `${values.telefono} ${values.telefono2}`
     }};
     
     try {
         const response = await axiosClient.post(idLogUrl, transform)
         console.log(response);
     } catch (error) {
         console.log(error);
     }
    
  };

     

  return (
    <div className="container mt-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Cards />
        </Tab>
        <Tab eventKey="profile" title="Profile">
        
          <Container>
              <Row>
                  <Col className="my-3"><FormControl
                           placeholder="Nombre"
                            aria-label="Nombre"
                          aria-describedby="nombre"
                />
                     
                        </Col>
                           <Col md={8} >
                               <Form onSubmit={handleDatosPerfil}>
                   <InputGroup className="mb-3">
                     <InputGroup.Text id="nombre" ><FaNapster/></InputGroup.Text>
                     <FormControl 
                       placeholder="Nombre"
                       aria-label="Nombre"
                       aria-describedby="nombre"
                       name= 'nombre'
                       onKeyUp={handleKeyUp}
                     />
                   </InputGroup>
                  
         
                   <InputGroup className="mb-3">
                     <FormControl
                       placeholder="Apellido"
                       aria-label="Apellido"
                       aria-describedby="basic-addon2"
                       name="apellido"
                       onKeyUp={handleKeyUp}
                     />
                     <InputGroup.Text id="basic-addon2"><FaAddressCard/></InputGroup.Text>
                   </InputGroup>
                   <InputGroup className="mb-3">
                     <InputGroup.Text id="basic-addon2"><FaAddressCard/></InputGroup.Text>
                     <FormControl
                       placeholder="Domicilio"
                       aria-label="Domicilio"
                       aria-describedby="basic-addon2"
                       name="domicilio"
                       onKeyUp={handleKeyUp}
                     />
                     
                   </InputGroup>
                   <InputGroup className="mb-3">
                     <FormControl
                       placeholder="Telefono"
                       aria-label="Telefono"
                       aria-describedby="basic-addon2"
                       name="telefono"
                       onKeyUp={handleKeyUp}
                     />
                     <InputGroup.Text id="basic-addon2"><FaPhoneAlt/></InputGroup.Text>
                   </InputGroup>
                   <InputGroup className="mb-3">
                     <FormControl
                       placeholder="Telefono2"
                       aria-label="Telefono2"
                       aria-describedby="basic-addon2"
                       name="telefono2"
                       onKeyUp={handleKeyUp}
                     />
                     <InputGroup.Text id="basic-addon2"><FaWhatsapp/></InputGroup.Text>
                   </InputGroup>
         
                   <Button className="btns" type="submit">Editar datos</Button>
         
         
                </Form>
         
            </Col>
            </Row>
            </Container>
        </Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
    </div>
  )
};

export default UserProfile








     

     






  