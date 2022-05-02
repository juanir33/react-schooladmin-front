import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { validationRegister } from "../../helpers/validationRegister"
import useForm from "../../hooks/useForm"
import { values_register } from "../../constants/index"
import Alert from "@mui/material/Alert"
import { Rating } from "@mui/material"
import { useContext, } from "react"
import { UserContext } from "../../context/UserContext"
import logo from '../../assets/img/logo.png'
import login from '../../assets/img/login.jpg'


const Register = ({ children }) => {

    const { registerUser, } = useContext(UserContext);
    const { handleKeyUp, handleSubmit, errors, handleBlur, values } = useForm(values_register, registerUser, validationRegister);

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
                                        <label for="floatingInput" >Nombre</label>
                                        {values.name.touch && errors.name && <Alert severity="error" variant="filled" className="m-1 p-0" >{errors.name}</Alert>}
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Nombre" name="name" onKeyUp={handleKeyUp} onBlur={handleBlur} />
                                        <label for="text" className="sr-only">Apellido</label>
                                        {values.lastname.touch && errors.lastname && <Alert severity="error" variant="filled" className="m-1 p-0" >{errors.lastname}</Alert>}
                                        <input type="text" className=" ml-2 form-control" id="floatingInput" placeholder="Apellido" name="lastname" onKeyUp={handleKeyUp} onBlur={handleBlur} />
                                    </div>
                                    <div className="form-group">
                                        <label for="email" className="sr-only">Email</label>
                                        {values.email.touch && errors.email && <Alert severity="error" variant="filled" className="m-1 p-0" >{errors.email}</Alert>}
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} onBlur={handleBlur} />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="sr-only">Password</label>
                                        <label for="floatingPassword">Contraseña</label>
                                        {values.password.touch && errors.password && <Alert severity="error" variant="filled" className="m-1 p-0" >{errors.password}</Alert>}
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp} onBlur={handleBlur} />
                                        <label for="password" className="sr-only">Password</label>
                                        <label for="floatingPassword">Confirma tu contraseña</label>
                                        {values.confirmPassword.touch && errors.confirmPassword && <Alert severity="error" variant="filled" className="m-1 " >{errors.confirmPassword}</Alert>}
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp} onBlur={handleBlur} />
                                    </div>
                                    <div>
                                        <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Registrate" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </main>

    )
}

export default Register
