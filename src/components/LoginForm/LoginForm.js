import { Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { validationLogin } from "../../helpers/validationLogin"
import useForm from "../../hooks/useForm"
import { values_login } from "../../constants/index"
import Alert from "@mui/material/Alert"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import "./LoginForm.css"
import {Navbar} from '../Navbar/Navbar'

const LoginForm = () => {

    const {loginUser, auth} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() =>{
        if(auth){
            navigate('/home')
        }
    },[auth])

    const {handleKeyUp, handleSubmit, values, errors, handleBlur} = useForm(values_login, loginUser, validationLogin);
    
    
     return (
         
        <div className="text-center ">
                <div className="container">
                    <div className="row cards">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body card-body-login p-4 p-sm-5">
                                    <h5 className="card-title text-center mb-5 fw-light fs-5"><strong>INICIAR SESION</strong></h5>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <Form.Control type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} onBlur={handleBlur} />
                                                <label for="floatingInput">Email</label>
                                                {values.email.touch && errors.email && <Alert severity="error" variant="filled" className="mt-3" >{errors.email}</Alert>}
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Form.Control type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp} onBlur={handleBlur}/>
                                                <label for="floatingPassword">Contraseña</label>
                                                {values.password.touch && errors.password && <Alert severity="error" variant="filled" className="mt-3" >{errors.email}</Alert>}
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btns text-uppercase fw-bold" type="submit">Entrar</button>
                                        
                                        </div>
                                        <hr className="my-4"/>
                                            <div className="d-grid mb-2">
                                               <h5>No tenes cuenta?<Link className="nav-link m-1" to='/register'>Registrate</Link></h5> 
                                            </div>
                                            <div className="d-grid">
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
        </div>
    )
}

export default LoginForm