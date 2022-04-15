import { Button, Card } from "react-bootstrap";

import React from "react";
import news from "../../constants/news";


function Cards({ imagen, titulo, texto, boton }) {

    
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="primary">{boton}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
