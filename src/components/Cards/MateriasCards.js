import './MateriaCards.css'
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  RiCalendarTodoFill,
 
} from "react-icons/ri";



const materias = [{
    nombre: 'Matemitica',
    abreviatura: 'MAT1',
    fecha: '23/02/2022'
},{
  nombre: 'Historia',
  abreviatura: 'HIS1',
  fecha: '23/02/2022'
},{
  nombre: 'Lengua',
  abreviatura: 'LEN1',
  fecha: '23/02/2022'
}]
const listMaterias = materias.map((materia) => {
    return (
      <Card style={{ width: "18rem" }} className="profile-card m-3" >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{materia.nombre}</Card.Title>
          <div
            className="d-flex w-100 justify-content-center
      "
          >
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
          <Button className='btns-light'>Editar</Button>
          <Button className='btns-light' >Eliminar</Button>
        </Card.Body>
      </Card>
    );
  });


const MateriasCard = () => {
   

  

  return (
   
    <div>
        <Card style={{ width: "18rem" }} className="profile-card m-3" >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>CREAR MATERIA</Card.Title>
          
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className="tool">
            <Form.Control type="text" name="nombre" placeholder="Nombre de materia"></Form.Control>
          </ListGroupItem>
          <ListGroupItem className="tool">
            <Form.Control type="text" name="abreviatura" placeholder="Codigo de materia"></Form.Control>
          </ListGroupItem>
          
        </ListGroup>
        <Card.Body className="d-flex justify-content-center">
          <Button className='btns-light'>Crear</Button>
          
        </Card.Body>
      </Card>
        <hr></hr>
       <div className='d-flex mt-5'>
      {listMaterias}
      </div>
    
  </div>)}

export default MateriasCard;
