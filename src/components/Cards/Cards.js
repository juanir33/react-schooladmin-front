import { Button, Card } from "react-bootstrap";

import React from "react";
import news from "../../constants/news";


function Cards({ imagen, titulo, texto, boton }) {

    
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{'titulo'}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fuga tempore! Maiores unde, voluptate, esse et hic harum assumenda laborum quia nulla commodi iusto iste alias molestias quidem, quasi eaque.
        </Card.Text>
        <Button variant="primary">texto</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
