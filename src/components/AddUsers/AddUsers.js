import { useState } from "react";
import uniqid from "uniqid"; // instalamos con npm install uniqid
import { Form } from "react-bootstrap";
import "./AddUsers.css";

const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    tel: "",
    password: "",
    rol: "",
    userId: uniqid(),
    asistencia: "",
    curso: "",
    materias: {
      lenguas: {
        cursando: "lenguas",
        notas: [6, 8, 10],
      },
      matematicas: {
        cursando: "matematicas",
        notas: [],
      },
      fisica: {
        cursando: "fisica",
        notas: [],
      },
      geografia: {
        cursando: "geografia",
        notas: [],
      },
      quimica: {
        cursando: "quimica",
        notas: [],
      },
    },
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mt-3">Ingresa un nuevo usuario</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-m-10">
          <Form>
            <div className="mb-3"></div>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="name"
                placeholder="Ingresa tu nombre"
                name="name"
                onKeyUp={(e) => handleForm(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Ingresa tu apellido"
                name="lastname"
                onKeyUp={(e) => handleForm(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                onKeyUp={(e) => handleForm(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Ingresa tu Telefono"
                name="tel"
                max="10"
                onKeyUp={(e) => handleForm(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu password"
                name="password"
                onKeyUp={(e) => handleForm(e)}
              />
            </Form.Group>
            <Form.Select
              aria-label="Rol del usuario"
              name="rol"
              onChange={(e) => handleForm(e)}
            >
              <option>Seleccion el rol del usuario</option>
              <option value="Alumno">Alumno</option>
              <option value="Profesor">Profesor</option>
              <option value="Preceptor">Preceptor</option>
            </Form.Select>
            <br></br>
            <Form.Check
              disabled
              name="lenguas"
              onKeyUp={(e) => handleForm(e)}
              type="switch"
              id="custom-switch"
              label="Lenguas"
              value={"lenguas"}
            />
            <Form.Check
              name="matematicas"
              onKeyUp={(e) => handleForm(e)}
              type="switch"
              id="custom-switch"
              value={!"matematicas"}
              label="Matematicas"
            />
            <Form.Check
              name="fisica"
              onKeyUp={(e) => handleForm(e)}
              type="switch"
              isValid="true"
              id="custom-switch"
              value={!"fisica"}
              label="Fisica"
            />
            <Form.Check
              name="quimica"
              onKeyUp={(e) => handleForm(e)}
              isInvalid="quimica"
              type="switch"
              id="custom-switch"
              value={!"quimica"}
              label="Quimica"
            />
            <Form.Check
              //disabled
              name="geografia"
              onKeyUp={(e) => handleForm(e)}
              type="switch"
              value={!"geografia"}
              label="Geografia"
              id="disabled-custom-switch"
            />
          </Form>
          <br></br>
          <button onClick={AddUser} className="btn btn-success">
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
