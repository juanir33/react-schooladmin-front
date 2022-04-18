
import {useNavigate } from "react-router-dom"
import { validationRegister } from "../../helpers/validationRegister"
import useForm from "../../hooks/useForm"
import { values_register } from "../../constants/index"
import Alert from "@mui/material/Alert"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"

const Register = () => {

    const {registerUser, auth} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() =>{
        if(auth){
            navigate('/home')
        }
    },[auth])

    const {handleKeyUp, handleSubmit, value, errors} = useForm(values_register, registerUser, validationRegister);
{

}
    return (
        <div className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body-login p-4 p-sm-5">
                                    <h4 className="card-title text-center mb-4 fw-light fs-5"><strong>CREA TU CUENTA</strong></h4>
                                    <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="Nombre" name="name" onKeyUp={handleKeyUp} />
                                                <label for="floatingInput" >Nombre</label> 
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="Apellido" name="lastname" onKeyUp={handleKeyUp}/>
                                                <label for="floatingInput">Apellido</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp}/>
                                                <label for="floatingInput">Email</label>
                                        </div>
                                        <div className="form-floating  mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onKeyUp={handleKeyUp}/>
                                                <label for="floatingPassword">Contraseña</label>
                                        </div>
                                        <div className="form-floating  mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="confirmPassword" onKeyUp={handleKeyUp}/>
                                                <label for="floatingPassword">Confirma tu contraseña</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">REGISTRARSE</button>
                                            {Object.keys(errors).length===0?null:
                                        Object.values(errors).map((error,index)=><Alert severity="error" className="mt-3" key={index}>{error}</Alert>)}
                                       
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

export default Register
