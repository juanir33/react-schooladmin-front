
import React from 'react';
import { Table  } from 'react-bootstrap'

export const Tables = () => {
  return (
    <Table striped bordered hover className="m-4 w-75">
  <thead>
    <tr>
      <th></th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Juan Pablo</td>
      <td>Capilla</td>
      <td>juanpablocapilla@gmail.com</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Pablo</td>
      <td>Sangenis</td>
      <td>pablosangenis@gmail.com</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Matias</td>
      <td>Neira</td>
      <td>matiasneira@gmail.com</td>
    </tr>
  </tbody>
</Table>
  )
}


export default Table