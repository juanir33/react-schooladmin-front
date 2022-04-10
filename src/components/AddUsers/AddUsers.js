import { useState } from "react";
import uniqid from "uniqid"; // instalamos con npm install uniqid
import { Form } from "react-bootstrap";
import './AddUsers.css';

const Adduser = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [lenguas, setLenguas] = useState('');
  const [matematicas, setMatematicas] = useState('');
  const [fisica, setFisica] = useState('');
  const [geografia, setGeografia] = useState('');
  const [quimica, setQuimica] = useState('');


  const addUser = () => {
    var user = {
      name: name,
      lastname: lastname,
      email: email,
      tel: tel,
      password: password,
      rol: rol,
      userId: uniqid(),
      lenguas: lenguas,
      matematicas: matematicas,
      fisica: fisica,
      geografia: geografia,
      quimica: quimica
    };
    console.log(user);
    
  };
  const SelectMateria = (e) =>{
    if(e == "Alumno"){
        <><Form.Check
            onChange={(e) => {
                setLenguas(e.target.value);
            } }
            type="switch" id="custom-switch"
            label="Lenguas" value={!lenguas} /><Form.Check
                onChange={(e) => {
                    setMatematicas(e.target.value);
                } }
                type="switch"
                id="custom-switch"
                value={!matematicas}
                label="Matematicas" /><Form.Check
                onChange={(e) => {
                    setFisica(e.target.value);
                } }
                type="switch"
                isValid="true"
                id="custom-switch"
                value={!fisica}
                label="Fisica" /><Form.Check
                onChange={(e) => {
                    setQuimica(e.target.value);
                } }
                isInvalid="quimica"
                type="switch" id="custom-switch"
                value={!quimica} label="Quimica" /><Form.Check
                //disabled
                onChange={(e) => {
                    setGeografia(e.target.value);
                } }
                type="switch"
                value={!geografia}
                label="Geografia"
                id="disabled-custom-switch" /></>
    }else{
        console.log(rol);
    };
}
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
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                required="true"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {setName(e.target.value);}}>
                </input>
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                value={lastname}
                onChange={(e) => {setLastname(e.target.value);}}>
                </input>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                onChange={(e) => {
                  setEmail(e.target.value);}}/>
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
                  setTel(e.target.value);}} ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"> Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);}} ></input>
            </div>
            <Form.Select
              aria-label="Rol del usuario"
              onChange={(e) => {
                setRol(e.target.value);
                SelectMateria(e.target.value)  }}>
              <option>Seleccion el rol del usuario</option>
              <option value="Alumno">Alumno</option>
              <option value="Profesor">Profesor</option>
              <option value="Preceptor">Preceptor</option>
            </Form.Select>
            <br></br>
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
