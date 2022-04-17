import React, { useContext, useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  RiCalendarTodoFill,
  RiMailFill,
  RiSmartphoneFill,
} from "react-icons/ri";
import {
  FaIdBadge,
  FaWhatsapp,
  FaPhoneSquareAlt,
  FaEnvelopeOpenText,
  FaSchool,
  FaMapMarked,
} from "react-icons/fa";
import "./ProfileCard.css";
import { UserContext } from "../../context/UserContext";

import axiosClient from "../../config/axiosClient";
import * as moment from 'moment'

const ProfileCard = () => {
  const [users, setUsers] = useState([])
  const {getAuth} = useContext(UserContext)
  getAuth();
  

  useEffect(()=>{
    const getUsers = async () => {
      
      const {data} = await axiosClient.get('users/list');
       setUsers(data.users)
    }
    try {
      getUsers()
    } catch (error) {
      console.log(error);
      
    };;
    
    

  }
    
  ,[])
  
  
  const usuarios = users;

  return usuarios.map((usuario) => {
    return (
      <Card style={{ width: "18rem" }} className="profile-card m-3" >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{usuario.rol}</Card.Title>
          <div
            className="d-flex w-100 justify-content-center
      "
          >
            {/* <Card.Text>{usuario.profile.apellido + ' ' + usuario.profile.nombre}</Card.Text> */}
            
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className="tool">
            <RiCalendarTodoFill className="mx-2 icon " />{" "}
            <span className="tiptext">Fecha de Ingreso</span> {moment(usuario.createdAt).format( "DD-MM-YYYY")}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <FaWhatsapp className="mx-2 icon" /> {}{" "}
            <span className="tiptext">Telefono personal</span>{" "}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <RiMailFill className="mx-2 icon" /> {usuario.email}{" "}
            <span className="tiptext">Mail personal</span>{" "}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <FaIdBadge className="mx-2 icon" /> {usuario._id}{" "}
            <span className="tiptext">Id</span>{" "}
          </ListGroupItem>
          {/* <ListGroupItem className="tool">
            <FaSchool className="mx-2 icon" /> IPET 255{" "}
            <span className="tiptext">Establecimiento</span>{" "}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <FaPhoneSquareAlt className="mx-2 icon" /> 358-423512{" "}
            <span className="tiptext">Telefono institucion</span>{" "}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <FaEnvelopeOpenText className="mx-2 icon" /> {usuario.email}{" "}
            <span className="tiptext">Mail institucional</span>{" "}
          </ListGroupItem>

          <ListGroupItem className="tool">
            <FaMapMarked className="mx-2 icon" /> Maria del mar 356 - CP3456{" "}
            <span className="tiptext">Direccion establecimiento</span>{" "}
          </ListGroupItem> */}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#"></Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card>
    );
  });
};

export default ProfileCard;
