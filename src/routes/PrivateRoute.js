import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {UserContext} from "./../context/UserContext"

const PrivateRoute = ({children}) => {
<<<<<<< HEAD
    const {auth, getAuth} = useContext(UserContext);
    useEffect(()=>{
        getAuth();
    },[])
=======
    const {getAuth, auth} = useContext(UserContext);
    getAuth();
    
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca
    return(
        auth? children : <Navigate to='/' replace />
    );
    }

export default PrivateRoute