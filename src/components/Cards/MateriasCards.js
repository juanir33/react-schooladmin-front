import "./MateriaCards.css";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { RiCalendarTodoFill } from "react-icons/ri";
import { useState, useContext, useEffect} from "react";
import axiosClient from "../../config/axiosClient";
import {UserContext} from "../../context/UserContext";

const initialState = {name:"", abreviatura:"" }

const ListaMaterias= () => {
  const { getAuth} = useContext(UserContext);
  const [form, setForm] = useState();
 const [mat, setMat] = useState([]);
  
 const getMaterias = async()=>{
   const response = await axiosClient.get('/materias');
   setMat(response.data.materias)
 }
 
 useEffect(() => {
    getMaterias();
  }, [])
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }
  
  console.log(form);
 
  const addMateria = async (e) => {
    e.preventDefault();
    let materia = {
      nombre: form.nombre,
      abreviatura: form.abreviatura,
    }
    console.log(materia);

    const data = await axiosClient.post("/materias", materia);
    console.log(data.data);
    getMaterias();
  }
  
  const delMateria = async (e) => {
    getAuth();
    let id = e.target.id;
    console.log(id);
    const data = await axiosClient.delete(`/materias/${id}`);
    getMaterias();
  }

  const putMateria = async () => {
    getAuth();
    const data = await axiosClient.put("/materias:id");
  }
  

  
 
 let materias = mat !== undefined ? mat : [];
console.log(materias);
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
          
          <Button onClick= {(e)=>delMateria(e)} id={`${materia._id}`} className="btns-light">Eliminar</Button>
        </Card.Body>
      </Card>
    );
  });
  
 
  return (
    <div>
      <Form onSubmit={(e) => addMateria(e) }>
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
