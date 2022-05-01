import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { validationRegister } from "../../helpers/validationRegister"
import useForm from "../../hooks/useForm"
import { values_register } from "../../constants/index"
import Alert from "@mui/material/Alert"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import logo from '../../assets/img/logo.png'
import login from '../../assets/img/login.jpg'

const Register = () => {

    const { registerUser, auth } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (auth) {
            navigate('/home')
        }
    }, [auth])

    const { handleKeyUp, handleSubmit, value, errors } = useForm(values_register, registerUser, validationRegister);
    {

    }
    return (    
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                        <img src={login} alt="login" class="login-card-img" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <div className="brand-wrapper">
                                <img src={logo} alt="logo" className="logo" />
                                </div>
                                <p className="login-card-description">CREA TU CUENTA</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex">
                                        <label for="text" className="sr-only">Nombre</label>
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Nombre" name="name" onKeyUp={handleKeyUp} />
                                        <label for="text" className="sr-only">Apellido</label>
                                        <input type="text" className=" ml-2 form-control" id="floatingInput" placeholder="Apellido" name="lastname" onKeyUp={handleKeyUp} />
                                    </div>
                                    <div className="form-group">
                                        <label for="email" className="sr-only">Email</label>
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="sr-only">Password</label>
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp} />
                                        <label for="password" className="sr-only">Password</label>
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp} />
                                    </div> 
                                    <div>
                                    <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Registrate"/>
                                        {Object.keys(errors).length === 0 ? null :
                                            Object.values(errors).map((error, index) => <Alert severity="error" className="mt-3" key={index}>{error}</Alert>)}
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register
