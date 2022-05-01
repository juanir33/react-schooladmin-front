import { Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { validationLogin } from "../../helpers/validationLogin"
import useForm from "../../hooks/useForm"
import { values_login } from "../../constants/index"
import Alert from "@mui/material/Alert"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import logo from '../../assets/img/logo.png'
import login from '../../assets/img/login.jpg'


const LoginForm = () => {

    const { loginUser, auth } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (auth) {
            navigate('/home')
        }
    }, [auth])

    const { handleKeyUp, handleSubmit, value, errors } = useForm(values_login, loginUser, validationLogin);
    {
    }
    return (
        <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">"
        <div className=" container">
            <div className=" card login-card ">
                <div className=" row no-gutters">
                    <div className=" col-md-5">
                        <img src={login} alt="login" class="login-card-img" />
                    </div>
                    <div className=" col-md-7">
                        <div className=" card-body">
                            <div className=" brand-wrapper">
                                <img src={logo} alt="logo" className="logo" />
                            </div>
                            <p className=" login-card-description">INICIAR SESION</p>
                            <form onSubmit={handleSubmit}>
                                <div className=" form-group">
                                    <label for="email" className=" sr-only">Email</label>
                                    <Form.Control type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} />
                                </div>
                                <div className=" form-groupnpo mb-4">
                                    <label for="password" className=" sr-only">Password</label>
                                    <Form.Control type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp} />
                                </div>
                                <div>
                                    <input name="login" id="login" className=" btn btn-block login-btn mb-4" type="submit" />
                                    {Object.keys(errors).length === 0 ? null :
                                        Object.values(errors).map((error, index) => <Alert severity="error" className="mt-3" key={index}>{error}</Alert>)}
                                </div>
                            </form>
                            <p className=" login-card-footer-text">No tienes cuenta? <Link to="/register" >Registrate aqui</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default LoginForm