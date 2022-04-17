<<<<<<< HEAD
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
=======
import { createContext, useEffect, useState } from "react";
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca
import axiosClient from "../config/axiosClient";
import jwt_decode from 'jwt-decode'

export const UserContext = createContext();

<<<<<<< HEAD
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
=======
const UserProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[auth, setAuth] = useState(false);
    const[token, setToken] = useState(null);
    
    


>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca

    const loginUser = async (values) => {
        try {
            const { data } = await axiosClient.post("/auth/login", values);
            setToken(data.token);
            setAuth(true)
            localStorage.setItem('token', data.token)
        } catch (error) {
            console.log(error);
            setAuth(false);
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token');
            }
        }
<<<<<<< HEAD
    }
    const getAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            axiosClient.defaults.headers.common['token'] = token;
        } else {
            delete axiosClient.defaults.headers.common['token']
        }
        try {
            const response = await axiosClient.get('/users/list');
            setAuth(true);
            setUser(response.data.user);
            setToken(response.data.token);
        } catch (error) {
            console.log(error)
            setAuth(false);
            setUser(null);
            setToken(null);
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token')
            }
        }

    }
    const logOut = () => {
        setAuth(false);
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');

    }
    return (
        <UserContext.Provider value={{ user, setUser, loginUser, auth, getAuth, logOut }}>
=======
    };
    const getAuth = async () =>{
        const toke = localStorage.getItem('token')
        
        if(toke){      
             
        
        try {
            setAuth(true)
        } catch (error) {
            console.log(error);
            setAuth(false);
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }
            
        }



    }};
    const authen =  ()=>{

        const token = localStorage.getItem('token')
        console.log(token);
        if(token){
            axiosClient.defaults.headers.common['token']= token

        }else{
            delete axiosClient.defaults.headers.common['token']
        }

    
    };

    

        
    const decoder = () =>{
        const data  = localStorage.getItem('token');
        const logged = jwt_decode(data)
        return logged
        };
        

        
    
    
        




    
    

    
    
    return(
        <UserContext.Provider value={{user, setUser, loginUser, auth, authen, getAuth,  decoder }}>
>>>>>>> 09f2031172a9bc161dc2351b55101d14f767c3ca
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider