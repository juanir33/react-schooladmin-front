import { useState } from "react";
import uniqid from "uniqid"; // instalamos con npm install uniqid
import { Form } from "react-bootstrap";

const Adduser = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("Alumno");
  const [materia, setMateria] = useState('nada');

  const addMateria = () => {
      var materias = {
          lenguas: false,
          matematicas: false,
          fisica: false,
          quimica: false,
          geografia: false

      }
      console.log(materias);
  }
  const addUser = () => {
    var user = {
      name: name,
      lastname: lastname,
      email: email,
      tel: tel,
      password: password,
      rol: rol,
      userId: uniqid(),
      materia: addMateria()
    };
    console.log(user);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mt-3">Ingresa un nuevo usuario</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-2">
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              ></input>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <div className="mb-3">
              <label htmlFor="tel" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control"
                value={tel}
                onChange={(e) => {
                  setTel(e.target.value);
                }}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <Form.Select
              aria-label="Rol del usuario"
              onChange={(e) => {
                setRol(e.target.value);
              }}
            >
              <option>Seleccion el rol del usuario</option>
              <option value="Alumno">Alumno</option>
              <option value="Profesor">Profesor</option>
              <option value="Preceptor">Preceptor</option>
            </Form.Select>
            <br></br>
            <Form.Check type="switch" id="custom-switch" label="Lenguas" />
            <Form.Check
              onChange={(e) => {
                setMateria(e.target.value);
              }}
              type="switch"
              id="custom-switch"
              value="matematicas"
              label="Matematicas"
            />
            <Form.Check
              onChange={(e) => {
                addMateria(e.target.value);
              }}
              type="switch"
              id="custom-switch"
              value={'fisica: true'}
              label="Fisica"
            />
            <Form.Check 
            onChange={(e) => {
                setMateria(e.target.value);}}
              type="switch" id="custom-switch" 
              value="true" label="Quimica" />
            <Form.Check
              disabled
              type="switch"
              value="geografia"
              label="disabled switch"
              id="disabled-custom-switch"
            />
          </Form>
          <br></br>
          <button onClick={addUser} className="btn btn-success">
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};

export default Adduser;
