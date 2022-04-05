import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {RiCalendarTodoFill,RiMailFill, RiSmartphoneFill} from 'react-icons/ri'
import {FaIdBadge, FaWhatsapp,FaPhoneSquareAlt, FaEnvelopeOpenText , FaSchool, FaMapMarked} from "react-icons/fa"
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <Card style={{ width: "18rem" }} className="profile-card m-3">
      <Card.Img variant="top" src="" />
      <Card.Body >
        <Card.Title>PRECEPTOR</Card.Title>
        <div className='d-flex w-100 justify-content-center
        '>
        <Card.Text>Raul El Raulo</Card.Text>
        </div>
      </Card.Body>
      <ListGroup className="list-group-flush ">
        <ListGroupItem className='tool '><RiCalendarTodoFill className='mx-2 icon ' /> <span className='tiptext'>Fecha de Ingreso</span> 20/03/2013</ListGroupItem>
        <ListGroupItem className='tool'><FaWhatsapp className='mx-2 icon'/>  +54935844678903 <span className='tiptext'>Telefono personal</span> </ListGroupItem>
        <ListGroupItem className='tool'><RiMailFill className='mx-2 icon'/>  raulsito@gmail.com <span className='tiptext'>Mail personal</span> </ListGroupItem>
        <ListGroupItem className='tool'><FaIdBadge className='mx-2 icon'/>  345j455j55 <span className='tiptext'>Id</span> </ListGroupItem>
        <ListGroupItem className='tool'><FaSchool className='mx-2 icon'/>  IPET 255 <span className='tiptext'>Establecimiento</span> </ListGroupItem>
        <ListGroupItem className='tool'><FaPhoneSquareAlt className='mx-2 icon'/>  358-423512 <span className='tiptext'>Telefono institucion</span> </ListGroupItem>
        <ListGroupItem className='tool'><FaEnvelopeOpenText className='mx-2 icon'/>  raulelraulo@ipet255.edu <span className='tiptext'>Mail institucional</span> </ListGroupItem>
        
        <ListGroupItem className='tool'><FaMapMarked className='mx-2 icon'/> Maria del mar 356 - CP3456 <span className='tiptext'>Direccion establecimiento</span> </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
