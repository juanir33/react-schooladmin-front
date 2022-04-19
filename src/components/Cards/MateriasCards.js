import "./MateriaCards.css";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { RiCalendarTodoFill } from "react-icons/ri";
import { useState } from "react";
import axiosClient from "../../config/axiosClient";
import getAuth from "../../context/UserContext";
import getMaterias from "../../context/UserContext";

const initialState = {name:"", abreviatura:"" }

const ListaMaterias= () => {

  const addMateria = async () => {
    const data = await axiosClient.post("/materias");
    console.log(data);
  }
  
  const delMateria = async () => {
    getAuth();
    const data = await axiosClient.delete("/materias:id");
  }

  const putMateria = async () => {
    getAuth();
    const data = await axiosClient.put("/materias:id");
  }
  const [mat, setMat] = useState([]);  
  const getMaterias = async () => {
    getAuth();
    try {
      const response = await axiosClient.get("/materias");
      let data  = response;
    } catch (error) {
        console.warn(error);
    }
  }; 
  getMaterias();
  const [form, setForm] = useState();
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

 let materias = [ 
    {
      nombre: "Matematicas",
      abreviatura: "MAT1",
    },
    {
      nombre: "Historia",
      abreviatura: "HIS1",
    },
    {
      nombre: "Lenguas",
      abreviatura: "LENG1",
    },
    {
      nombre: "Fisica",
      abreviatura: "FIS1",
    }
  ];

  const listMaterias = materias.map((materia) => {
    return (
      <Card style={{ width: "12rem" }} className="profile-card m-3">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{materia.nombre}</Card.Title>
          <Card.Text>{materia.abreviatura}</Card.Text>
          <div className="d-flex w-100 justify-content-center">
            
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush ">
        </ListGroup>
        <Card.Body className="d-flex justify-content-between">
          <Button onClick={(e)=> putMateria(e)}className="btns-light">Editar</Button>
          <Button onClick= {(e)=>delMateria(e)} className="btns-light">Eliminar</Button>
        </Card.Body>
      </Card>
    );
  });
  
 
  return (
    <div>
      <Form onSubmit={addMateria} >
      <Card style={{ width: "12rem" }} className="profile-card m-3">
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
              onKeyUp={(e) => handleForm(e)}
            ></Form.Control>
          </ListGroupItem>
          <ListGroupItem className="tool">
            <Form.Control
              type="text"
              name="abreviatura"
              placeholder="abreviatura"
              onKeyUp={(e) => handleForm(e)}
            >
              </Form.Control>
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-center">
          <Button type="submit" className="btns-light">Crear</Button>
        </Card.Body>
      </Card>
    </Form>
      <hr></hr>
      <div className="d-flex mt-4">{listMaterias}</div>
    </div>
  );
}

export default ListaMaterias;
