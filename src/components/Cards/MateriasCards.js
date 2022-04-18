import "./MateriaCards.css";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { RiCalendarTodoFill } from "react-icons/ri";
import { useState } from "react";
import axiosClient from "../../config/axiosClient";


const ListaMaterias= () => {
  
  const [nombre, setNombre] = useState("")
  const [codigo, setCodigo] = useState("")

  const addMaterias = () => {   
    materias.push({
      nombre: nombre, 
      codigo: codigo
    });
    console.log(materias);
  }
  let materias = [
    {
      nombre: "Matemitica",
      abreviatura: "MAT1",
      fecha: "23/02/2022",
    },
    {
      nombre: "Historia",
      abreviatura: "HIS1",
      fecha: "23/02/2022",
    }
  ];


  const listMaterias = materias.map((materia) => {
    return (
      <Card style={{ width: "14rem" }} className="profile-card m-3">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{materia.nombre}</Card.Title>
          <div className="d-flex w-100 justify-content-center">
            <Card.Text>{materia.abreviatura}</Card.Text>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className="tool">
            <RiCalendarTodoFill className="mx-2 icon " />{" "}
            <span className="tiptext">Creada</span> {materia.fecha}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-between">
          <Button className="btns-light">Editar</Button>
          <Button className="btns-light">Eliminar</Button>
        </Card.Body>
      </Card>
    );
  });
  
  const materiasCard = () => {
    
  };
  return (
    <div>
      <Card style={{ width: "14rem" }} className="profile-card m-3">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Nueva Materia</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className="tool">
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Nombre de materia"
              onKeyUp={(e) => setNombre(e.target.value)}
            ></Form.Control>
          </ListGroupItem>
          <ListGroupItem className="tool">
            <Form.Control
              type="text"
              name="abreviatura"
              placeholder="Codigo de materia"
              onKeyUp={(e)=> setCodigo(e.target.value)}
            ></Form.Control>
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-center">
          <Button onClick={addMaterias} className="btns-light">Crear</Button>
        </Card.Body>
      </Card>
      
      <hr></hr>
      <div className="d-flex mt-4">{listMaterias}</div>
    </div>
  );
}

export default ListaMaterias;
