

import { validationRegister } from "../../helpers/validationRegister"
import useForm from "../../hooks/useForm"
import { values_register } from "../../constants/index"
import Alert from "@mui/material/Alert"
import { Rating } from "@mui/material"
import { useContext,  } from "react"
import { UserContext } from "../../context/UserContext"
import "../LoginForm/LoginForm.css"
import {BiShow} from "react-icons/bi"


const Register = ({children}) => {

    const {registerUser} = useContext(UserContext);
   
    

    const {handleKeyUp, handleSubmit, errors, handleBlur, values } = 
    useForm(values_register, registerUser, validationRegister);
    


    return (
        <div classNameName="text-center">
                <div classNameName="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className=" card-body card-body-login p-4 p-sm-5">
                                    <h4 className="card-title text-center mb-4 fw-light fs-5"><strong>CREA TU CUENTA</strong></h4>
                                    <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                            <input type="text" className='form-control' id="floatingInput" placeholder="Nombre" name="name" onChange={handleKeyUp} onBlur={handleBlur} />
                                                <label for="floatingInput" >Nombre</label>  { values.name.touch && errors.name && <Alert severity="error"  variant="filled"  className="m-1 p-0" >{errors.name}</Alert>}
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className='form-control ' formNoValidate id="floatingInput" placeholder="Apellido" name="lastname" onBlur={handleBlur} onChange={handleKeyUp}/>
                                                <label for="floatingInput">Apellido</label>
                                                {values.lastname.touch && errors.lastname && <Alert severity="error"  variant="filled"  className="m-1 p-0" >{errors.lastname}</Alert>}
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} onBlur={handleBlur}/>
                                                <label for="floatingInput">Email</label>{values.email.touch &&errors.email && <Alert severity="error"  variant="filled"  className="m-1 p-1" >{errors.email}</Alert>}
                                        </div>
                                        <div className="input-group form-floating  mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="password" onChange={handleKeyUp} onBlur={handleBlur}/>
                                                <label for="floatingPassword">Contraseña</label>{values.password.touch &&errors.password && <Alert severity="error"  variant="filled"  className="m-1 p-0" >{errors.password}</Alert>}
                                        </div>
                                        <div className="form-floating  mb-3">
                                        <input type="password" className='form-control ' id="floatingPassword" placeholder="Contraseña" name="confirmPassword" onChange={handleKeyUp} onBlur={handleBlur}/>
                                                <label for="floatingPassword">Confirma tu contraseña</label>{values.confirmPassword.touch &&errors.confirmPassword && <Alert severity="error"  variant="filled"  className="m-1 " >{errors.confirmPassword}</Alert>}
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btns p-2 text-uppercase fw-bold " type="submit">REGISTRARSE</button>
                                            
                                       
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {children}
        </div>
        
    )
}

export default Register
