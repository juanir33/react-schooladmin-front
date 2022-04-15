import { createContext, useState } from "react";
import axiosClient from "../config/axiosClient";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[auth, setAuth] = useState(false);
    const[token, setToken] = useState(null);

    const loginUser = async(values) => {
        try {
           const {data} =  await axiosClient.post("/auth/login", values);
            setToken(data.token);
           setAuth(true)
           localStorage.setItem('token', data.token)
        } catch (error) {
            console.log(error);
            setAuth(false);
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }
        }
    }

    return(
        <UserContext.Provider value={{user, setUser, loginUser, auth}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider