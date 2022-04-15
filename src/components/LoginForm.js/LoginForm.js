import {Form, FloatingLabel, Button} from 'react-bootstrap'
import './LoginForm.css'
import {MdSchool} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const LoginForm = () => {
  const [values, setValues] = useState('');
  const handleKeyUp = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="d-flex justify-content-center align-items-center w-25">
     <form className="w-100 fo" onChange={handleKeyUp}>
     <div className="d-flex justify-content-center ">
         <MdSchool/>
     </div>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
         onChange={handleKeyUp} >
          <Form.Control type="email" placeholder="name@example.com" name='email'   />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password"  name='pass' onChange={handleKeyUp} />
        </FloatingLabel>
        <div className="d-flex justify-content-center">
        <Link  className="mt-3 btn btns" to="/"> INICIAR SESION </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
