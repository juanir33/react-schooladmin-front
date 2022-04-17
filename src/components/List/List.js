
import { Button, Table } from "react-bootstrap"
// este recibe los valores de cualquier consulta y muestra la tabla
const List = () => {
    return(
        <Table size="sx" striped bordered responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Curso</th>
            <th>Accion</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Capilla</td>
            <td>Juan Pablo</td>
            <td>54352345</td>
            <td>jp@gmail.com</td>
            <td>5 1º</td>
            <td><Button size="sm" variant="outline-success">Editar</Button> ¡  
            <Button size="sm" variant="outline-danger">Borrar</Button></td>

          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>43791494</td>
            <td>@fat</td>
            <td>5 1º</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table> 
    )
}

export default List