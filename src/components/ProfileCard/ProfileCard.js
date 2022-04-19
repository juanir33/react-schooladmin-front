import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
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
  FaTrashAlt,
} from "react-icons/fa";
import "./ProfileCard.css";
import { UserContext } from "../../context/UserContext";


import * as moment from 'moment'
import SearchBar from "../SearchBar/SearchBar";

const ProfileCard = () => {
  const {users, handleDeleteUser} = useContext(UserContext);

  return (
    <>
    <SearchBar/>
    <div className="d-flex w-100 flex-wrap justify-content-evenly">
  {users.map((usuario) => {
    return (
      <Card style={{ width: "18rem" }} className="profile-card m-3" >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{usuario.rol}</Card.Title>
          <div
            className="d-flex w-100 justify-content-center
      "
          >
            <Card.Text>{usuario.profile ? usuario.profile.apellido + ' ' + usuario.profile.nombre : 'Sin datos'}</Card.Text>
            
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className="tool">
            <RiCalendarTodoFill className="mx-2 icon " />{" "}
            <span className="tiptext">Fecha de Ingreso</span> {moment(usuario.createdAt).format( "DD-MM-YYYY")}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <FaWhatsapp className="mx-2 icon" /> {usuario.profile ? usuario.profile.telefonos: 'Sin datos'}{" "}
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
          <ListGroupItem className="tool">
            <FaSchool className="mx-2 icon" /> IPET 255{" "}
            <span className="tiptext">Establecimiento</span>{" "}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <FaPhoneSquareAlt className="mx-2 icon" /> {usuario.profile ? usuario.profile.telefonos: 'Sin datos'}{" "}
            <span className="tiptext">Telefono institucion</span>{" "}
          </ListGroupItem>
          <ListGroupItem className="tool">
            <FaEnvelopeOpenText className="mx-2 icon" /> {usuario.email}{" "}
            <span className="tiptext">Mail institucional</span>{" "}
          </ListGroupItem>

          <ListGroupItem className="tool">
            <FaMapMarked className="mx-2 icon" /> {usuario.profile ? usuario.profile.domicilio: 'Sin datos'}{" "}
            <span className="tiptext">Direccion establecimiento</span>{" "}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button className=" btns-light btn mx-2" >Habilitar</Button>
          <Button className="btns-light btn mx-1" >Editar</Button>
          <Button className="btns-light btn mx-3" id={usuario._id}  onClick={handleDeleteUser}><FaTrashAlt/></Button>
        </Card.Body>
      </Card>
    );
  })}
  </div>

  </>);
};

export default ProfileCard;
