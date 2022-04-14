import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { initialValues } from "../../constants/index"
import { validationLogin } from "../../helpers/validations"
import useForm from "../../hooks/useForm"
import axiosClient from "../../config/axiosClient"
import { Alert } from "react-bootstrap"

const LoginForm = () => {
    const loginUser = async(data) => {
        try {
           const response =  await axiosClient.post('/login', data);
           console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const {handleKeyUp, handleSubmit, value, errors} = useForm(initialValues, loginUser, validationLogin);
    {
    }
     return (
        <div className="text-center ">
                <div className="container">
                    <div className="row cards">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p-4 p-sm-5">
                                    <h5 className="card-title text-center mb-5 fw-light fs-5"><strong>INICIAR SESION</strong></h5>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <Form.Control type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp}/>
                                                <label for="floatingInput">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Form.Control type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp}/>
                                                <label for="floatingPassword">Contraseña</label>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                                <label className="form-check-label" for="rememberPasswordCheck">Recordarme</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Entrar</button>
                                        {Object.keys(errors).length===0?null:
                                        Object.values(errors).map((error,index)=><Alert key={index}>{error}</Alert>)}
                                        </div>
                                        <hr className="my-4"/>
                                            <div className="d-grid mb-2">
                                               <h5>No tenes cuenta?<Link to='/register'>Registrate</Link></h5> 
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