import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {UserContext} from "./../context/UserContext"

const PublicRoute = ({children}) => {
    const {auth, getAuth }= useContext(UserContext);
    getAuth();
    return(
        !auth? children : <Navigate to='/home'/>
    );
    }

export default PublicRoute