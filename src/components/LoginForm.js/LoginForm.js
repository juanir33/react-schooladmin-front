import {Form, FloatingLabel, Button} from 'react-bootstrap'
import './LoginForm.css'
import {MdSchool} from 'react-icons/md'


const LoginForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-25">
     <form className="w-100 fo">
     <div className="d-flex justify-content-center ">
         <MdSchool/>
     </div>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <div className="d-flex justify-content-center">
        <Button variant="primary" className="mt-3 btns"> INICIAR SESION </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
