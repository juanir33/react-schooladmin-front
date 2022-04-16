import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {UserContext} from "./../context/UserContext"

const PrivateRoute = ({children}) => {
    const {auth} = useContext(UserContext);
    return(
        auth? children : <Navigate to='/login'/>
    );
    }

export default PrivateRoute